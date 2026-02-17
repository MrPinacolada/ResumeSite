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

  // Проверка секрета webhook (рекомендуется)
  if (secret) {
    const headerSecret = getHeader(event, "x-telegram-bot-api-secret-token");
    if (headerSecret !== secret) {
      // Telegram будет ретраить, но лучше вернуть 401
      throw createError({ statusCode: 401, statusMessage: "Invalid webhook secret" });
    }
  }

  const update = await readBody<TgUpdate>(event);

  const chatId = update.message?.chat?.id;
  const text = update.message?.text?.trim();

  // Telegram ждёт быстрый 200 OK — мы и так успеем
  if (!chatId) return { ok: true };

  // 1) /start
  if (text === "/start") {
    await resetTgState(chatId);

    await tgSendMessage({
      token,
      chatId,
      text: `Привет! Я бот на Nuxt3 Nitro.\nНажми кнопку снизу, и я покажу 10 шагов.`,
      replyMarkup: makeBottomButton(BTN_TEXT),
    });

    await setTgState(chatId, { step: 0 });
    return { ok: true };
  }

  // 2) Дальше (нажатие reply-кнопки приходит как текст)
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

    // Если вдруг жмут после завершения
    await tgSendMessage({
      token,
      chatId,
      text: `Мы уже закончили. Напиши /start чтобы начать заново.`,
      replyMarkup: { remove_keyboard: true },
    });
    return { ok: true };
  }

  // 3) Любой другой текст
  await tgSendMessage({
    token,
    chatId,
    text: `Я понимаю только /start и кнопку “${BTN_TEXT}”.`,
    replyMarkup: makeBottomButton(BTN_TEXT),
  });

  return { ok: true };
});
