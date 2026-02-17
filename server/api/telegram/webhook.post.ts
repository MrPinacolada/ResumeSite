// server/api/telegram/webhook.post.ts
import { getTgState, resetTgState, setTgState } from "~/server/utils/tgState";
import { makeInlineButton, tgAnswerCallback, tgSendMessage } from "~/server/utils/telegram";

type TgUpdate = {
  message?: {
    message_id: number;
    chat: { id: number };
    text?: string;
  };
  callback_query?: {
    id: string;
    data?: string;
    message?: {
      chat: { id: number };
    };
  };
};

const MAX_STEPS = 10;
const BTN_TEXT = "Дальше ▶️";
const CB_NEXT = "next"; // callback_data

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

  // 1) /start (обычное сообщение)
  const chatIdFromMessage = update.message?.chat?.id;
  const text = update.message?.text?.trim();

  if (chatIdFromMessage && text === "/start") {
    await resetTgState(chatIdFromMessage);
    await setTgState(chatIdFromMessage, { step: 0 });

    await tgSendMessage({
      token,
      chatId: chatIdFromMessage,
      text: `Привет! Нажми кнопку в сообщении — будет 10 шагов.`,
      replyMarkup: makeInlineButton(BTN_TEXT, CB_NEXT),
    });

    return { ok: true };
  }

  // 2) Нажатие inline-кнопки приходит как callback_query
  const cb = update.callback_query;
  const cbId = cb?.id;
  const cbData = cb?.data;
  const chatIdFromCb = cb?.message?.chat?.id;

  if (cbId && chatIdFromCb && cbData === CB_NEXT) {
    // чтобы Telegram убрал "часики" на кнопке
    await tgAnswerCallback({ token, callbackQueryId: cbId });

    const state = await getTgState(chatIdFromCb);
    const nextStep = state.step + 1;

    if (nextStep <= MAX_STEPS) {
      await setTgState(chatIdFromCb, { step: nextStep });

      const isLast = nextStep === MAX_STEPS;

      await tgSendMessage({
        token,
        chatId: chatIdFromCb,
        text: isLast
          ? `Шаг ${nextStep}/${MAX_STEPS}. Это был последний шаг ✅`
          : `Шаг ${nextStep}/${MAX_STEPS}. Нажми кнопку ниже:`,
        replyMarkup: isLast ? undefined : makeInlineButton(BTN_TEXT, CB_NEXT),
      });

      return { ok: true };
    }

    await tgSendMessage({
      token,
      chatId: chatIdFromCb,
      text: `Мы уже закончили. Напиши /start чтобы начать заново.`,
    });

    return { ok: true };
  }

  // 3) На всё остальное — молча ок (или можно подсказать)
  // Чтобы не спамить, можно просто return ok
  return { ok: true };
});
