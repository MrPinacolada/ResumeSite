// server/api/telegram/webhook.post.ts
import { getTgState, resetTgState, setTgState } from "~/server/utils/tgState";
import {
  makeInlineButton,
  tgAnswerCallback,
  tgSendMessage,
  tgSendVideo,
} from "~/server/utils/telegram";

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

const START_VIDEO =
  "BAACAgIAAxkBAAMbaZRNH0V0vd-vw_etNmVrqXzprskAAoaLAAII3KBIL5115z3dtLM6BA";

// callback_data
const CB_START = "start_practice";
const CB_NEXT = "next_question";

// шаги
// step=0 — сразу после /start (практика ещё не началась, ждём кнопку Start)
// step=1..9 — вопросы 1..9
const QUESTIONS = [
  "1) Зачем вам нужна эта цель?",
  "2) Сколько времени вы уже собираетесь действовать?",
  "3) Как я красиво объясняю себе бездействие?",
  "4) Какую иллюзию контроля я выбираю вместо действия?",
  "5) Чего я больше боюсь: успеха или неудачи?",
  "6) Что внутри меня противится этой цели?",
  "7) Что вы потеряете или что станет невозможно, если у вас получится?",
  "8) В чем моя выгода быть жертвой?",
  "9) Какой мне придется перестать быть, чтобы цель осуществилась?\n\nКакую роль (свою) я тогда потеряю?",
];

export default defineEventHandler(async (event) => {
  const cfg = useRuntimeConfig();
  const token = cfg.telegramBotToken as string | undefined;
  const secret = cfg.telegramWebhookSecret as string | undefined;

  if (!token)
    throw createError({
      statusCode: 500,
      statusMessage: "Missing TELEGRAM_BOT_TOKEN",
    });

  if (secret) {
    const headerSecret = getHeader(event, "x-telegram-bot-api-secret-token");
    if (headerSecret !== secret) {
      throw createError({
        statusCode: 401,
        statusMessage: "Invalid webhook secret",
      });
    }
  }

  const update = await readBody<TgUpdate>(event);

  const maybeVideo = (update as any)?.message?.video;
  if (maybeVideo?.file_id) {
    console.log("VIDEO_FILE_ID:", maybeVideo.file_id);
  }

  // ===== /start =====
  const chatId = update.message?.chat?.id;
  const text = update.message?.text?.trim();

  if (chatId && text === "/start") {
    await resetTgState(chatId);
    await setTgState(chatId, { step: 0 });

    // 1) Видео + текст (caption)
    await tgSendVideo({
      token,
      chatId,
      video: START_VIDEO,
      caption:
        "Привет!\nОтправляю видео на тему «Почему я саботирую свою цель и как начать действовать»",
    });

    // 2) Инструкция + кнопка "Начать"
    await tgSendMessage({
      token,
      chatId,
      text:
        "Начать практику 📃 🖊️\n" +
        "Отвечать на вопросы нужно письменно — либо в телефоне, либо приготовьте ручку и блокнот.",
      replyMarkup: makeInlineButton("Начать ✅", CB_START),
    });

    return { ok: true };
  }

  // ===== callbacks =====
  const cb = update.callback_query;
  const cbId = cb?.id;
  const cbData = cb?.data;
  const cbChatId = cb?.message?.chat?.id;

  if (!cbId || !cbChatId || !cbData) return { ok: true };

  // убираем "часики" на кнопке
  await tgAnswerCallback({ token, callbackQueryId: cbId });

  // Нажали "Начать"
  if (cbData === CB_START) {
    await setTgState(cbChatId, { step: 1 });

    await tgSendMessage({
      token,
      chatId: cbChatId,
      text: QUESTIONS[0],
      replyMarkup: makeInlineButton("Следующий вопрос ▶️", CB_NEXT),
    });

    return { ok: true };
  }

  // Нажали "Следующий вопрос"
  if (cbData === CB_NEXT) {
    const state = await getTgState(cbChatId);

    // если вдруг state слетел — мягко просим /start
    if (!state?.step || state.step < 1) {
      await tgSendMessage({
        token,
        chatId: cbChatId,
        text: "Чтобы начать, напишите /start",
      });
      return { ok: true };
    }

    const nextStep = state.step + 1;

    // step 1..9 соответствуют QUESTIONS[0..8]
    if (nextStep <= QUESTIONS.length) {
      await setTgState(cbChatId, { step: nextStep });

      const isLast = nextStep === QUESTIONS.length;

      await tgSendMessage({
        token,
        chatId: cbChatId,
        text: QUESTIONS[nextStep - 1],
        replyMarkup: isLast
          ? undefined
          : makeInlineButton("Следующий вопрос ▶️", CB_NEXT),
      });

      if (isLast) {
        await tgSendMessage({
          token,
          chatId: cbChatId,
          text: "✅ Практика завершена. Если хотите пройти заново — напишите /start",
        });
      }

      return { ok: true };
    }

    // на всякий — если жмут после конца
    await tgSendMessage({
      token,
      chatId: cbChatId,
      text: "Мы уже закончили. Напишите /start чтобы начать заново.",
    });

    return { ok: true };
  }

  return { ok: true };
});
