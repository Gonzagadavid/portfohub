"use client";

import MenuBoard from "@/components/custom/menuBoard";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { fetcher } from "@/lib/fetcher";
import useSWR from "swr";
import Pathname from "./_components/Pathname";
import Link from "next/link";
import { Routes } from "@/constants/routes";
import PortfolioAddress from "./_components/PortfolioAddress";
import { LayoutTemplate } from "lucide-react";

const isNotRequired = new Set(["template", "projects", "pathname"]);

export default function Dashboard() {
  const { data, isLoading } = useSWR("/portfolio/requirements", fetcher);
  if (isLoading) return "loading...";

  const missingInfo = Object.keys(data?.checkInfo).reduce(
    (acc, key) =>
      data?.checkInfo[key] || isNotRequired.has(key) ? acc : [...acc, key],
    []
  );
  const pathname = data?.checkInfo?.pathname;

  return (
    <div
      className="flex flex-col items-center px-4 sm:px-6 lg:px-8"
      role="main"
      aria-label="Painel de Controle do Portfólio"
    >
      <MenuBoard checkInfo={data?.checkInfo} />
      {!!missingInfo.length && (
        <Card
          className="p-5 border border-[#7027d7] mt-10 max-auto text-center"
          role="alert"
          aria-live="assertive"
          aria-labelledby="missing-info-title"
          tabIndex={0}
        >
          <CardTitle
            id="missing-info-title"
            tabIndex={0}
            className="text-[#7027d7] text-[20px] sm:text-[18px]">
            Complete suas Informações para a continuidade na construção do seu
            portfólio
          </CardTitle>
        </Card>
      )}
      {!missingInfo.length &&
        (!pathname ? <Pathname pathname={pathname} /> : <PortfolioAddress />)}
      {!missingInfo.length && pathname && (
        <Link className="m-10"
          href={Routes.PORTFOLIO_TEMPLATE}
          aria-label="Selecionar modelo de portfólio"
          tabIndex={0}
        >
          <Card
            className="p-10 flex flex-col items-center sm:p-8 md:p-10"
            role="button"
            aria-pressed="false"
            tabIndex={0}
          >
            <CardTitle
              className="text-center text-[20px] sm:text-[18px]"
              aria-live="polite"
            >
              Selecionar o modelo de portfólio
            </CardTitle>
            <LayoutTemplate
              className="ml-0 sm:ml-5 mt-4 sm:mt-0"
              aria-hidden="true"
              focusable="false" />
          </Card>
        </Link>
      )}
    </div>
  );
}

