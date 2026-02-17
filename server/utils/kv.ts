// server/utils/kv.ts
type UpstashKVResult<T> = { result: T };

function getKvConfig() {
  const cfg = useRuntimeConfig();
  const url = cfg.kvRestApiUrl as string | undefined;
  const token = cfg.kvRestApiToken as string | undefined;

  if (!url) throw createError({ statusCode: 500, statusMessage: "Missing KV_REST_API_URL" });
  if (!token) throw createError({ statusCode: 500, statusMessage: "Missing KV_REST_API_TOKEN" });

  return { url, token };
}

export async function kvGetJson<T>(key: string): Promise<T | null> {
  const { url, token } = getKvConfig();

  const res = await $fetch<UpstashKVResult<string | null>>(
    `${url}/get/${encodeURIComponent(key)}`,
    {
      headers: { Authorization: `Bearer ${token}` },
    },
  );

  if (!res.result) return null;

  try {
    return JSON.parse(res.result) as T;
  } catch {
    // если внезапно сохранили не JSON — считаем как отсутствующее
    return null;
  }
}

export async function kvSetJson<T>(key: string, value: T, opts?: { exSeconds?: number }) {
  const { url, token } = getKvConfig();

  const base = `${url}/set/${encodeURIComponent(key)}/${encodeURIComponent(JSON.stringify(value))}`;
  const full = opts?.exSeconds ? `${base}?EX=${opts.exSeconds}` : base;

  await $fetch(full, {
    headers: { Authorization: `Bearer ${token}` },
  });
}

export async function kvDel(key: string) {
  const { url, token } = getKvConfig();

  await $fetch(`${url}/del/${encodeURIComponent(key)}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
}
