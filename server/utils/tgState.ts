// server/utils/tgState.ts
import { kvDel, kvGetJson, kvSetJson } from "~/server/utils/kv";

export type TgState = { step: number };

// чтобы не копить мусор — держим state неделю
const STATE_TTL_SECONDS = 60 * 60 * 24 * 7;

export const tgStateKey = (chatId: number) => `tg:chat:${chatId}`;

export async function getTgState(chatId: number): Promise<TgState> {
  return (await kvGetJson<TgState>(tgStateKey(chatId))) ?? { step: 0 };
}

export async function setTgState(chatId: number, state: TgState): Promise<void> {
  await kvSetJson(tgStateKey(chatId), state, { exSeconds: STATE_TTL_SECONDS });
}

export async function resetTgState(chatId: number): Promise<void> {
  await kvDel(tgStateKey(chatId));
}
