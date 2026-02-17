// server/api/telegram/webhook.post.ts
import { getTgState, resetTgState, setTgState } from "~/server/utils/tgState";
import { recordQuestion, recordStart } from "~/server/utils/tgAnalytics";
import { makeBottomButton, tgSendMessage, tgSendVideo } from "~/server/utils/telegram";

type TgUpdate = {
  message?: {
    message_id: number;
    chat: { id: number };
    text?: string;
  };
};

const START_VIDEO =
  "BAACAgIAAxkBAAMbaZRNH0V0vd-vw_etNmVrqXzprskAAoaLAAII3KBIL5115z3dtLM6BA";

const BTN_START = "Начать практику 📃 🖊️";
const BTN_NEXT = "Следующий вопрос ▶️";

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
  "10) Какая боль не дает вам двигаться, но дает оправдание?",
  "11) Какая часть пути к достижению цели вас особенно пугает?",
  "12) Что будет, если вы сделаете это действие плохо и неидеально?",
  "13) Что если вы начнете без уверенности?",
  "14) Если вы не начнете сейчас, то когда начнете и почему именно тогда?",
  "15) Что самое страшное может случиться, если ваша цель реализуется?",
];

const AFTER_MESSAGES: Record<number, string> = {
  3: "Уже сам факт, что вы это замечаете — шаг вперёд🦶",
  6: "Обратите внимание, что внутри вас есть не только сопротивление, но осознанность и желание развиваться 🧬🔥",
  8: "Важно не торопиться. Позвольте себе быть искренней здесь 🫂",
  10: "Вы проделали большую работу 🤌🔥 Осталось 5 вопросов 🤍",
  13: "Очень ценно, что вы это увидели! Так держать❤️‍🔥",
};

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

  const chatId = update.message?.chat?.id;
  const text = update.message?.text?.trim();

  if (!chatId) return { ok: true };

  // /start
  if (text === "/start") {
    await resetTgState(chatId);
    await setTgState(chatId, { step: 0 });

    await tgSendVideo({
      token,
      chatId,
      video: START_VIDEO,
      caption: "Привет!\nОтправляю видео на тему «Почему я саботирую свою цель и как начать действовать»",
    });

    await tgSendMessage({
      token,
      chatId,
      text:
        "Подготовьтесь к важной необходимой работе с вашим мышлением и бессознательным🧬\n" +
        "Отвечать на вопросы нужно письменно — либо в телефоне, либо приготовьте ручку и блокнот.\n" +
        "Выделите примерно полчаса-час ⌚️ Будет 15 вопросов.",
      replyMarkup: makeBottomButton(BTN_START),
    });

    return { ok: true };
  }

  // нажали "Начать" (reply-кнопка приходит текстом)
  if (text === BTN_START) {
    await setTgState(chatId, { step: 1 });

    await tgSendMessage({
      token,
      chatId,
      text: QUESTIONS[0],
      replyMarkup: makeBottomButton(BTN_NEXT),
    });

    await recordStart(chatId);
    return { ok: true };
  }

  // нажали "Следующий вопрос"
  if (text === BTN_NEXT) {
    const state = await getTgState(chatId);

    if (!state?.step || state.step < 1) {
      await tgSendMessage({
        token,
        chatId,
        text: "Чтобы начать, напишите /start",
        replyMarkup: makeBottomButton(BTN_START),
      });
      return { ok: true };
    }

    const nextStep = state.step + 1;

    if (nextStep <= QUESTIONS.length) {
      await setTgState(chatId, { step: nextStep });

      const isLast = nextStep === QUESTIONS.length;

      const followUp = AFTER_MESSAGES[state.step];
      if (followUp) {
        await tgSendMessage({ token, chatId, text: followUp });
      }

      await recordQuestion(chatId, nextStep, isLast);

      await tgSendMessage({
        token,
        chatId,
        text: QUESTIONS[nextStep - 1],
        replyMarkup: isLast ? { remove_keyboard: true } : makeBottomButton(BTN_NEXT),
      });

      if (isLast) {
        await tgSendMessage({
          token,
          chatId,
          text:
            `Вы - большая молодец! Победитель 🏆 🥇\n` +
            `Посмотрите, какой путь вы уже прошли, отвечая на эти вопросы 🤌\n\n` +
            `Дальше важно распаковать ваши осознания и поставить первые три легкие действия по направлению к вашей 🎯\n` +
            `Приглашаю вас на первую бесплатную встречу, где мы познакомимся, получше поисследуем ваш запрос, барьеры, которые сейчас видите перед собой, и поймём, с чем важно будет работать.\n` +
            `Чтобы записаться на коуч-сессию, пиши мне в личные сообщения @raliyaya- хочу записаться на бесплатную сессию и мы выберем с тобой время для нашей встречи ✍️`,
          replyMarkup: { remove_keyboard: true },
        });
      }

      return { ok: true };
    }

    await tgSendMessage({
      token,
      chatId,
      text: "Мы уже закончили. Напишите /start чтобы начать заново.",
      replyMarkup: { remove_keyboard: true },
    });

    return { ok: true };
  }

  // любой другой текст
  await tgSendMessage({
    token,
    chatId,
    text: "Напишите /start чтобы начать.",
    replyMarkup: makeBottomButton(BTN_START),
  });

  return { ok: true };
});
