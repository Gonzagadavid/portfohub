import { cloneElement, Suspense, use } from "react";
import { templatesMap } from "../_components/templateMap";
import { getPortfolioData } from "../_lib/getPortfolioData";

export default async function Portfolio({ params: { pathname } }) {
  const portfolioData = await getPortfolioData(pathname);
  const template = templatesMap?.[portfolioData?.template];

  return (
    <Suspense fallback={"...loading"}>
      {cloneElement(template, { portfolioData })}
    </Suspense>
  );
}
