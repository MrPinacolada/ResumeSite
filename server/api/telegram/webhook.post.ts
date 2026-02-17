// server/api/telegram/webhook.post.ts
import { getTgState, resetTgState, setTgState } from "~/server/utils/tgState";
import { makeInlineButton, tgAnswerCallback, tgSendMessage, tgSendVideo } from "~/server/utils/telegram";

type TgUpdate = {
  message?: {
    message_id: number;
    chat: { id: number };
    text?: string;
  };
  callback_query?: {
    id: string;
    data?: string;
    message?: { chat: { id: number } };
  };
};

const MAX_STEPS = 10;
const BTN_TEXT = "Дальше ▶️";
const CB_NEXT = "next";

const START_VIDEO = "https://devninja.net/intro.mp4";

export default defineEventHandler(async (event) => {
  const cfg = useRuntimeConfig();
  const token = cfg.telegramBotToken as string | undefined;
  const secret = cfg.telegramWebhookSecret as string | undefined;

  if (!token) throw createError({ statusCode: 500, statusMessage: "Missing TELEGRAM_BOT_TOKEN" });

  if (secret) {
    const headerSecret = getHeader(event, "x-telegram-bot-api-secret-token");
    if (headerSecret !== secret) throw createError({ statusCode: 401, statusMessage: "Invalid webhook secret" });
  }

  const update = await readBody<TgUpdate>(event);

  // /start
  const chatId = update.message?.chat?.id;
  const text = update.message?.text?.trim();

  if (chatId && text === "/start") {
    await resetTgState(chatId);
    await setTgState(chatId, { step: 0 });

    await tgSendVideo({
      token,
      chatId,
      video: START_VIDEO,
      caption: `Привет! Я бот на Nuxt3 (Vercel) + Upstash.\nНажми кнопку в сообщении — будет 10 шагов.`,
      replyMarkup: makeInlineButton(BTN_TEXT, CB_NEXT),
    });

    return { ok: true };
  }

  // callback на кнопку
  const cb = update.callback_query;
  const cbId = cb?.id;
  const cbData = cb?.data;
  const cbChatId = cb?.message?.chat?.id;

  if (cbId && cbChatId && cbData === CB_NEXT) {
    await tgAnswerCallback({ token, callbackQueryId: cbId });

    const state = await getTgState(cbChatId);
    const nextStep = state.step + 1;

    if (nextStep <= MAX_STEPS) {
      await setTgState(cbChatId, { step: nextStep });
      const isLast = nextStep === MAX_STEPS;

      await tgSendMessage({
        token,
        chatId: cbChatId,
        text: isLast
          ? `Шаг ${nextStep}/${MAX_STEPS}. Это был последний шаг ✅`
          : `Шаг ${nextStep}/${MAX_STEPS}. Нажми кнопку ниже:`,
        replyMarkup: isLast ? undefined : makeInlineButton(BTN_TEXT, CB_NEXT),
      });

      return { ok: true };
    }

    await tgSendMessage({
      token,
      chatId: cbChatId,
      text: `Мы уже закончили. Напиши /start чтобы начать заново.`,
    });

    return { ok: true };
  }

  return { ok: true };
});
