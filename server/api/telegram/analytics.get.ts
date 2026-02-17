// server/api/telegram/analytics.get.ts
import { getAllAnalytics } from "~/server/utils/tgAnalytics";

export default defineEventHandler(async (event) => {
  const cfg = useRuntimeConfig();
  const secret = cfg.telegramAnalyticsSecret as string | undefined;

  if (secret) {
    const provided =
      getHeader(event, "x-telegram-analytics-secret") || getQuery(event).secret;
    if (provided !== secret) {
      throw createError({ statusCode: 401, statusMessage: "Invalid analytics secret" });
    }
  }

  const data = await getAllAnalytics();

  return { ok: true, total: data.length, data };
});
