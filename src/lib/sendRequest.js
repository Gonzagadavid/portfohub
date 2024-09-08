"use server";

import { auth } from "@/app/api/auth/auth";

const baseUrlApi = process.env.BASE_URI_API;

export async function sendRequest(route, { arg }) {
  const session = await auth();
  const authorization = session?.token?.accessToken;

  const res = await fetch(`${baseUrlApi}${route}`, {
    method: "POST",
    body: JSON.stringify(arg),
    headers: {
      "Content-Type": "application/json",
      authorization
    }
  });
  const response = await res.json().catch(() => null);
  if (!res.ok) return Promise.reject(response);
  return response;
}
