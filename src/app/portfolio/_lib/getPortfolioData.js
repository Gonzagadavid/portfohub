"use server";

import { fetcher } from "@/lib/fetcher";

export const getPortfolioData = async (pathname) => {
  const portfolioData = await fetcher(`/portfolio/data/${pathname}`, {
    cache: "no-store"
  });
  return portfolioData?.portfolio;
};
