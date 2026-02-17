// server/api/telegram/webhook.post.ts
import { getTgState, resetTgState, setTgState } from "~/server/utils/tgState";
import { makeBottomButton, tgSendMessage } from "~/server/utils/telegram";

type TgUpdate = {
  message?: {
    message_id: number;
    chat: { id: number };
    text?: string;
  };
};

const MAX_STEPS = 10;
const BTN_TEXT = "Дальше ▶️";

export default defineEventHandler(async (event) => {
  const cfg = useRuntimeConfig();
  const token = cfg.telegramBotToken as string | undefined;
  const secret = cfg.telegramWebhookSecret as string | undefined;

  if (!token) throw createError({ statusCode: 500, statusMessage: "Missing TELEGRAM_BOT_TOKEN" });

  // проверка секретного токена вебхука (Telegram header)
  if (secret) {
    const headerSecret = getHeader(event, "x-telegram-bot-api-secret-token");
    if (headerSecret !== secret) {
      throw createError({ statusCode: 401, statusMessage: "Invalid webhook secret" });
    }
  }

  const update = await readBody<TgUpdate>(event);

  const chatId = update.message?.chat?.id;
  const text = update.message?.text?.trim();

  if (!chatId) return { ok: true };

  // /start
  if (text === "/start") {
    await resetTgState(chatId);

    await tgSendMessage({
      token,
      chatId,
      text: `Привет! Я бот на Nuxt3 (Vercel) + Upstash KV.\nНажми кнопку снизу — будет 10 шагов.`,
      replyMarkup: makeBottomButton(BTN_TEXT),
    });

    await setTgState(chatId, { step: 0 });
    return { ok: true };
  }

  // нажатие ReplyKeyboard-кнопки приходит как обычный текст
  if (text === BTN_TEXT) {
    const state = await getTgState(chatId);
    const nextStep = state.step + 1;

    if (nextStep <= MAX_STEPS) {
      await setTgState(chatId, { step: nextStep });

      const isLast = nextStep === MAX_STEPS;

      await tgSendMessage({
        token,
        chatId,
        text: isLast
          ? `Шаг ${nextStep}/${MAX_STEPS}. Это был последний шаг ✅`
          : `Шаг ${nextStep}/${MAX_STEPS}. Нажми “${BTN_TEXT}”`,
        replyMarkup: isLast ? { remove_keyboard: true } : makeBottomButton(BTN_TEXT),
      });

      return { ok: true };
    }

    await tgSendMessage({
      token,
      chatId,
      text: `Мы уже закончили. Напиши /start чтобы начать заново.`,
      replyMarkup: { remove_keyboard: true },
    });

    return { ok: true };
  }

  // любой другой текст
  await tgSendMessage({
    token,
    chatId,
    text: `Я понимаю только /start и кнопку “${BTN_TEXT}”.`,
    replyMarkup: makeBottomButton(BTN_TEXT),
  });

  return { ok: true };
});
