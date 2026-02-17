type ReplyKeyboardMarkup = {
  keyboard: Array<Array<{ text: string }>>;
  resize_keyboard?: boolean;
  one_time_keyboard?: boolean;
};

type ReplyMarkup =
  | { reply_keyboard_markup: ReplyKeyboardMarkup } 
  | ReplyKeyboardMarkup
  | { remove_keyboard: true };

export async function tgSendMessage(params: {
  token: string;
  chatId: number;
  text: string;
  replyMarkup?: ReplyKeyboardMarkup | { remove_keyboard: true };
}) {
  const { token, chatId, text, replyMarkup } = params;

  const url = `https://api.telegram.org/bot${token}/sendMessage`;
  const body: Record<string, any> = {
    chat_id: chatId,
    text,
    parse_mode: "HTML",
  };

  if (replyMarkup) body.reply_markup = replyMarkup;

  const res = await $fetch<{ ok: boolean; description?: string }>(url, {
    method: "POST",
    body,
  });

  return res;
}

export function makeBottomButton(text: string) {
  const kb: ReplyKeyboardMarkup = {
    keyboard: [[{ text }]],
    resize_keyboard: true,
    one_time_keyboard: false,
  };
  return kb;
}
