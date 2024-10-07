"use server";

const baseUrlApi = process.env.BASE_URI_API;

export const headFetcher = async (route, statusOk = 200) => {
  const response = await fetch(`${baseUrlApi}${route}`, {
    method: "HEAD",
    cache: "no-store"
  });
  if (response.status === statusOk) return true;
  return false;
};
