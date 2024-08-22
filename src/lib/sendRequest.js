"use server";
const baseUrlApi = process.env.BASE_URI_API;

export async function sendRequest(route, { arg }) {
  const response = await fetch(`${baseUrlApi}${route}`, {
    method: "POST",
    body: JSON.stringify(arg),
    headers: {
      "Content-Type": "application/json"
    }
  });
  if (!response.ok) {
    throw new Error("Request failed");
  }

  return response.json().catch(() => null);
}
