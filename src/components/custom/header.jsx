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
      <div className="w-full h-[80px] fixed top-0 left-4 right-0 flex items-center justify-between bg-black px-4 sm:px-8 md:px-10 ">
      <div className="flex items-center justify-start">
        <HeaderStartContainer />
      </div>

      <div className="flex-1 flex justify-center relative mr-5 ml-5">
        <Image
          width={150}
          height={150}
          src="/Logotipos-white.svg"
          alt="Logo"
          className="w-[120px] sm:w-[150px]"
        />
      </div>

      <div className="flex items-center justify-end">
        <HeaderEndContainer />
      </div>
    </div>
  );
}