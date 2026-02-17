// server/utils/telegram.ts
export type InlineKeyboardMarkup = {
  inline_keyboard: Array<Array<{ text: string; callback_data: string }>>;
};

export type ReplyMarkup = InlineKeyboardMarkup | { remove_keyboard: true };

export function makeInlineButton(text: string, callbackData: string): InlineKeyboardMarkup {
  return { inline_keyboard: [[{ text, callback_data: callbackData }]] };
}

async function tgCall(token: string, method: string, body: any) {
  const url = `https://api.telegram.org/bot${token}/${method}`;

  try {
    return await $fetch(url, { method: "POST", body });
  } catch (err: any) {
    const status = err?.response?.status;
    const data = err?.data; // <-- тут обычно { ok:false, description:"..." }

    console.error("[tg] error", {
      method,
      status,
      telegram: data,
      bodyPreview: {
        chat_id: body?.chat_id,
        hasVideo: !!body?.video,
        video: body?.video,
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
  video: string; // file_id ИЛИ https URL
  caption?: string;
  replyMarkup?: ReplyMarkup;
}) {
  const { token, chatId, video, caption, replyMarkup } = params;

  return tgCall(token, "sendVideo", {
    chat_id: chatId,
    video,
    caption,
    parse_mode: "HTML",
    ...(replyMarkup ? { reply_markup: replyMarkup } : {}),
  });
}

export async function tgAnswerCallback(params: {
  token: string;
  callbackQueryId: string;
  text?: string;
  showAlert?: boolean;
}) {
  const { token, callbackQueryId, text, showAlert } = params;

  return tgCall(token, "answerCallbackQuery", {
    callback_query_id: callbackQueryId,
    ...(text ? { text } : {}),
    ...(typeof showAlert === "boolean" ? { show_alert: showAlert } : {}),
  });
}
