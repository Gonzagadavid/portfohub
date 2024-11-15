"use client";

import Link from "next/link";
import { Button } from "../ui/button";
import { Routes } from "@/constants/routes";
import { usePathname } from "next/navigation";
import LogoutButton from "./logoutButton";
import ThemeButton from "./themeButtom";

const InitialPage = () => (
  <div className="w-64 flex justify-between">
    <Link href={Routes.LOGIN}>
      <Button className="w-[100px]">Entrar</Button>
    </Link>
    <Link href={Routes.REGISTER}>
      <Button className="w-[100px]">Cadastrar</Button>
    </Link>

  </div>
);

export function HeaderEndContainer({}) {
  const pathname = usePathname();

  return (
    <div className="flex justify-around">
      {pathname === Routes.HOME ? <InitialPage /> : <LogoutButton />}
      <ThemeButton />
    </div>);
}
