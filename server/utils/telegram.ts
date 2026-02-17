// server/utils/telegram.ts

export type ReplyKeyboardMarkup = {
  keyboard: Array<Array<{ text: string }>>;
  resize_keyboard?: boolean;
  one_time_keyboard?: boolean;
};

export type ReplyMarkup = ReplyKeyboardMarkup | { remove_keyboard: true };

export function makeBottomButton(text: string): ReplyKeyboardMarkup {
  return {
    keyboard: [[{ text }]],
    resize_keyboard: true,
    one_time_keyboard: false,
  };
}

async function tgCall(token: string, method: string, body: any) {
  const url = `https://api.telegram.org/bot${token}/${method}`;

  try {
    return await $fetch(url, {
      method: "POST",
      body,
    });
  } catch (err: any) {
    const status = err?.response?.status;
    const data = err?.data;

    console.error("[tg] error", {
      method,
      status,
      telegram: data,
      bodyPreview: {
        chat_id: body?.chat_id,
        hasVideo: !!body?.video,
        text: body?.text,
      },
    });

    throw err;
  }
}

export async function tgSendMessage(params: {
  token: string;
  chatId: number;
  text: string;
  replyMarkup?: ReplyMarkup;
}) {
  const { token, chatId, text, replyMarkup } = params;

  return tgCall(token, "sendMessage", {
    chat_id: chatId,
    text,
    parse_mode: "HTML",
    ...(replyMarkup ? { reply_markup: replyMarkup } : {}),
  });
}

export async function tgSendVideo(params: {
  token: string;
  chatId: number;
  video: string; // file_id или https URL
  caption?: string;
  replyMarkup?: ReplyMarkup;
}) {
  const { token, chatId, video, caption, replyMarkup } = params;

  return tgCall(token, "sendVideo", {
    chat_id: chatId,
    video,
    ...(caption ? { caption } : {}),
    parse_mode: "HTML",
    ...(replyMarkup ? { reply_markup: replyMarkup } : {}),
  });
}
