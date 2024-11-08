"use client";

import Link from "next/link";
import { Button } from "../ui/button";
import { Routes } from "@/constants/routes";
import { usePathname } from "next/navigation";
import LogoutButton from "./logoutButton";

const InitialPage = () => (
  <div className="w-[12%] flex justify-between gap-4">
    <Link href={Routes.LOGIN}>
      <Button className="w-[100px]">Entrar</Button>
    </Link>
    <Link href={Routes.REGISTER}>
      <Button className="w-[100px]">Cadastar</Button>
    </Link>
  </div>
);

export function HeaderEndContainer({}) {
  const pathname = usePathname();

  return pathname === Routes.HOME ? <InitialPage /> : <LogoutButton />;
}
