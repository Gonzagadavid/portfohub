"use server";

import { fetcher } from "@/lib/fetcher";

export const getPortfolioData = async () => {
  const portfolioData = await fetcher("/portfolio/portfolio-data", {
    cache: "no-store"
  });
  return portfolioData?.portfolio;
};
