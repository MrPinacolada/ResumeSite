// server/utils/tgAnalytics.ts
import { kvGetJson, kvSetJson } from "~/server/utils/kv";

export type TgAnalytics = {
  chatId: number;
  visitedAt: number;
  startedAt?: number;
  lastQuestion: number;
  questionsSeen: number;
  finished: boolean;
  finishedAt?: number;
  updatedAt: number;
};

const ANALYTICS_TTL_SECONDS = 60 * 60 * 24 * 90;
const INDEX_KEY = "tg:analytics:index";

const analyticsKey = (chatId: number) => `tg:analytics:${chatId}`;

async function getAnalytics(chatId: number): Promise<TgAnalytics | null> {
  return kvGetJson<TgAnalytics>(analyticsKey(chatId));
}

async function addToIndex(chatId: number): Promise<void> {
  const current = (await kvGetJson<number[]>(INDEX_KEY)) ?? [];
  if (current.includes(chatId)) return;
  await kvSetJson(INDEX_KEY, [...current, chatId]);
}

export async function getAnalyticsIndex(): Promise<number[]> {
  return (await kvGetJson<number[]>(INDEX_KEY)) ?? [];
}

export async function getAllAnalytics(): Promise<TgAnalytics[]> {
  const index = await getAnalyticsIndex();
  const results: TgAnalytics[] = [];

  for (const chatId of index) {
    const item = await getAnalytics(chatId);
    if (item) results.push(item);
  }

  return results;
}

export async function recordVisit(chatId: number) {
  const now = Date.now();
  const prev = await getAnalytics(chatId);
  if (prev) return; // уже записан

  const next: TgAnalytics = {
    chatId,
    visitedAt: now,
    lastQuestion: 0,
    questionsSeen: 0,
    finished: false,
    updatedAt: now,
  };

  await addToIndex(chatId);
  await kvSetJson(analyticsKey(chatId), next, { exSeconds: ANALYTICS_TTL_SECONDS });
}

export async function recordStart(chatId: number) {
  const now = Date.now();
  const prev = await getAnalytics(chatId);

  const next: TgAnalytics = {
    chatId,
    visitedAt: prev?.visitedAt ?? now,
    startedAt: now,
    lastQuestion: 1,
    questionsSeen: 1,
    finished: false,
    updatedAt: now,
  };

  await addToIndex(chatId);
  await kvSetJson(analyticsKey(chatId), next, { exSeconds: ANALYTICS_TTL_SECONDS });
}

export async function recordQuestion(chatId: number, questionNumber: number, isLast: boolean) {
  const now = Date.now();
  const prev = (await getAnalytics(chatId)) ?? {
    chatId,
    visitedAt: now,
    lastQuestion: 0,
    questionsSeen: 0,
    finished: false,
    updatedAt: now,
  };

  const next: TgAnalytics = {
    ...prev,
    lastQuestion: questionNumber,
    questionsSeen: Math.max(prev.questionsSeen, questionNumber),
    finished: isLast ? true : prev.finished,
    finishedAt: isLast ? now : prev.finishedAt,
    updatedAt: now,
  };

  await addToIndex(chatId);
  await kvSetJson(analyticsKey(chatId), next, { exSeconds: ANALYTICS_TTL_SECONDS });
}
