"use server";
const baseUrlApi = process.env.BASE_URI_API;

export async function fetcher(route) {
  const res = await fetch(`${baseUrlApi}${route}`, {
    cache: "no-store"
  });
  const response = await res.json().catch(() => null);
  if (!res.ok) return Promise.reject(response);
  return response;
}
