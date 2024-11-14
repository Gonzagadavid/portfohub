"use client";

import { Card, CardTitle } from "@/components/ui/card";
import { fetcher } from "@/lib/fetcher";
import Link from "next/link";
import useSWR from "swr";
import copy from "copy-text-to-clipboard";
import { ClipboardCopy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export default function PortfolioAddress() {
  const { data } = useSWR("/portfolio/pathname", fetcher);
  const portfolioUrl = data
    ? `${process.env.NEXT_PUBLIC_APP_URL}portfolio/${data.pathname}`
    : "";

  const onCopy = () => {
    copy(portfolioUrl);

    toast.info("O endereço do seu portfólio foi copiado para o clipboard", {
      ariaLive: "polite",
    });
  };

  return (
    <Card className="w-full max-w-[465px] h-auto p-4 border flex flex-col md:flex-row justify-between items-center gap-4">
      <Link href={portfolioUrl} className="text-center md:text-left break">
        <CardTitle className="text-[20px] sm:text-[18px] break-all">
          {portfolioUrl}
        </CardTitle>
      </Link>
      <Button onClick={onCopy} size="sm" variant="ghost" className="flex-shrink-0">
        <ClipboardCopy />
      </Button>
    </Card>
  );
}
