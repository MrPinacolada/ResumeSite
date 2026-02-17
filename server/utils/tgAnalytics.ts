// server/utils/tgAnalytics.ts
import { kvGetJson, kvSetJson } from "~/server/utils/kv";

export type TgAnalytics = {
  chatId: number;
  startedAt: number;
  lastQuestion: number;
  questionsSeen: number;
  finished: boolean;
  finishedAt?: number;
  updatedAt: number;
};

const ANALYTICS_TTL_SECONDS = 60 * 60 * 24 * 90;

const analyticsKey = (chatId: number) => `tg:analytics:${chatId}`;

async function getAnalytics(chatId: number): Promise<TgAnalytics | null> {
  return kvGetJson<TgAnalytics>(analyticsKey(chatId));
}

export async function recordStart(chatId: number) {
  const now = Date.now();

  const next: TgAnalytics = {
    chatId,
    startedAt: now,
    lastQuestion: 1,
    questionsSeen: 1,
    finished: false,
    updatedAt: now,
  };

  await kvSetJson(analyticsKey(chatId), next, { exSeconds: ANALYTICS_TTL_SECONDS });
}

export async function recordQuestion(chatId: number, questionNumber: number, isLast: boolean) {
  const now = Date.now();
  const prev = (await getAnalytics(chatId)) ?? {
    chatId,
    startedAt: now,
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

  await kvSetJson(analyticsKey(chatId), next, { exSeconds: ANALYTICS_TTL_SECONDS });
}
