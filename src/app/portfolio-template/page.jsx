import { cloneElement, Suspense, use } from "react";
import { getPortfolioData } from "./_lib/getPortfolioData";

import TemplateHub from "./_components/TemplateHub";

export default async function PortfolioTemplate() {
  const portfolioData = await getPortfolioData();

  return (
    <Suspense fallback={"...loading"}>
      <TemplateHub portfolioData={portfolioData} />
    </Suspense>
  );
}
