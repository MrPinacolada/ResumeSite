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

export async function tgSendMessage(params: {
  token: string;
  chatId: number;
  text: string;
  replyMarkup?: ReplyMarkup;
}) {
  const { token, chatId, text, replyMarkup } = params;

  const url = `https://api.telegram.org/bot${token}/sendMessage`;
  const body: Record<string, any> = {
    chat_id: chatId,
    text,
    parse_mode: "HTML",
  };

  if (replyMarkup) body.reply_markup = replyMarkup;

  return await $fetch<{ ok: boolean; description?: string }>(url, {
    method: "POST",
    body,
  });
}
