// server/utils/tgState.ts
type TgState = { step: number };

export const tgStateKey = (chatId: number) => `tg:chat:${chatId}`;

export async function getTgState(chatId: number): Promise<TgState> {
  const storage = useStorage("data"); 
  return (await storage.getItem<TgState>(tgStateKey(chatId))) ?? { step: 0 };
}

export async function setTgState(chatId: number, state: TgState): Promise<void> {
  const storage = useStorage("data");
  await storage.setItem(tgStateKey(chatId), state);
}

export async function resetTgState(chatId: number): Promise<void> {
  const storage = useStorage("data");
  await storage.removeItem(tgStateKey(chatId));
}
