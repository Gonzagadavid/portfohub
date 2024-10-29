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
    <div className="flex flex-col items-center">
      <MenuBoard checkInfo={data?.checkInfo} />
      {!!missingInfo.length && (
        <Card className="p-5 border border-[#7027d7] mt-5 w-full sm:w-[80%] lg:w-[60%] 2xl:w-[50%]">
          <CardTitle className="text-[#7027d7]">
            Complete suas Informações para a continuidade na construção do seu
            portfólio
          </CardTitle>
        </Card>
      )}
      {!missingInfo.length &&
        (!pathname ? <Pathname pathname={pathname} /> : <PortfolioAddress />)}
      {!missingInfo.length && pathname && (
        <Link className="m-10" href={Routes.PORTFOLIO_TEMPLATE}>
          <Card className="p-10 flex">
            <CardTitle>Selecionar o modelo de portfólio</CardTitle>
            <LayoutTemplate className="ml-5" />
          </Card>
        </Link>
      )}
    </div>
  );
}

