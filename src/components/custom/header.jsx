"use client";

import Image from "next/image";
import { HeaderStartContainer } from "./headerStartContainer";
import { HeaderEndContainer } from "./headerEndContainer";
import { Routes } from "@/constants/routes";
import { usePathname } from "next/navigation";

const hiddenPages = new Set([
  Routes.LOGIN,
  Routes.REGISTER,
  Routes.PORTFOLIO_TEMPLATE,
  Routes.PORTFOLIO
]);

export default function Header() {
  const pathname = usePathname();
  if (
    hiddenPages.has(pathname) ||
    new RegExp(Routes.PORTFOLIO, "g").test(pathname)
  )
    return null;

  return (
    <div className="w-full h-[75px] fixed z-[999] top-0 flex justify-between items-center px-10 left-0 bg-black">
      <HeaderStartContainer />
      <Image width={150} height={150} src="/Logotipos-white.svg" alt="" />
      <HeaderEndContainer />
    </div>
  );
}

