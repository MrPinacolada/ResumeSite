// server/utils/kv.ts
import Redis from "ioredis";

let redis: Redis | null = null;

function getRedis(): Redis {
  if (redis) return redis;

  const cfg = useRuntimeConfig();
  const url = cfg.redisUrl as string | undefined;

  if (!url) throw createError({ statusCode: 500, statusMessage: "Missing REDIS_URL" });

  redis = new Redis(url);
  return redis;
}

export async function kvGetJson<T>(key: string): Promise<T | null> {
  const val = await getRedis().get(key);
  if (!val) return null;

  try {
    return JSON.parse(val) as T;
  } catch {
    return null;
  }
}

export async function kvSetJson<T>(key: string, value: T, opts?: { exSeconds?: number }) {
  const r = getRedis();
  const data = JSON.stringify(value);

  if (opts?.exSeconds) {
    await r.set(key, data, "EX", opts.exSeconds);
  } else {
    await r.set(key, data);
  }
}

export async function kvDel(key: string) {
  await getRedis().del(key);
}
