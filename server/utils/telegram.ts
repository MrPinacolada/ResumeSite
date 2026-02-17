// server/utils/telegram.ts
export type InlineKeyboardMarkup = {
  inline_keyboard: Array<Array<{ text: string; callback_data: string }>>;
};

export type ReplyMarkup = InlineKeyboardMarkup | { remove_keyboard: true };

export function makeInlineButton(text: string, callbackData: string): InlineKeyboardMarkup {
  return {
    inline_keyboard: [[{ text, callback_data: callbackData }]],
  };
}

export async function tgSendMessage(params: {
  token: string;
  chatId: number;
  text: string;
  replyMarkup?: ReplyMarkup;
}) {
  const { token, chatId, text, replyMarkup } = params;

  return await $fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: "POST",
    body: {
      chat_id: chatId,
      text,
      parse_mode: "HTML",
      ...(replyMarkup ? { reply_markup: replyMarkup } : {}),
    },
  });
}

export async function tgAnswerCallback(params: {
  token: string;
  callbackQueryId: string;
  text?: string;
  showAlert?: boolean;
}) {
  const { token, callbackQueryId, text, showAlert } = params;

  return await $fetch(`https://api.telegram.org/bot${token}/answerCallbackQuery`, {
    method: "POST",
    body: {
      callback_query_id: callbackQueryId,
      ...(text ? { text } : {}),
      ...(typeof showAlert === "boolean" ? { show_alert: showAlert } : {}),
    },
  });
}
