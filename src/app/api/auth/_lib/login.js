"use server";

import { sendRequest } from "@/lib/sendRequest";

export const login = async (credentials) => {
  const token = await sendRequest("/users/login", {
    arg: { data: credentials, method: "POST" }
  });

  return token;
};
