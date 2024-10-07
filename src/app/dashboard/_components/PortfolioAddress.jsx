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
    ? `${process.env.NEXT_PUBLIC_APP_URL}/portfolio/${data.pathname}`
    : "";

  const onCopy = () => {
    copy(portfolioUrl);

    toast.info("O endereço do seu portfólio foi copiado para o clipboard");
  };

  return (
    <Card className="w-[500px] h-[100px] border  flex justify-around items-center">
      <Link href={portfolioUrl}>
        <CardTitle>{portfolioUrl}</CardTitle>
      </Link>
      <Button onClick={onCopy} size="sm" variant="ghost">
        <ClipboardCopy />
      </Button>
    </Card>
  );
}
