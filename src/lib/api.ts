const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export async function apiFetch<T = any>(path: string): Promise<T> {
  const res = await fetch(`${BASE_URL}${path}`, { next: { revalidate: 3600 } });
  if (!res.ok) throw new Error(`API error: ${res.status}`);
  return res.json();
}
