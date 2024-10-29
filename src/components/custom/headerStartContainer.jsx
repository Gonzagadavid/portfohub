"use client";

import { Menu, LogOut, Home } from "lucide-react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from "@/components/ui/sheet";
import Link from "next/link";
import { Routes, RoutesInfo } from "@/constants/routes";
import { logout } from "@/lib/actions";
import { usePathname } from "next/navigation";
import { useState } from "react";

const routesMenu = Object.keys(RoutesInfo);

export function HeaderStartContainer() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const onClose = () => setIsOpen(false);
  const onOpen = () => setIsOpen(true);
  const onOpenChange = (bool) => setIsOpen(bool);

  if (pathname === Routes.HOME) return <div />;
  return (
    <div>
      <Sheet open={isOpen} onOpenChange={onOpenChange}>
        <button onClick={onOpen}>
          <Menu size={30} />
        </button>

        <SheetContent side="left">
          <SheetHeader>
            <SheetTitle>Menu</SheetTitle>
          </SheetHeader>

          <hr className="my-4" />

          <div className="flex flex-col gap-4 px-4">
            <Link href={Routes.DASHBOARD}>
              <button
                onClick={onClose}
                className="flex items-center gap-2 text-left text-sm font-medium"
              >
                <Home size={18} /> Página Inicial
              </button>
            </Link>

            {routesMenu
              .filter((route) => RoutesInfo[route]?.label)
              .map((route) => (
                <Link href={route} key={route}>
                  <button
                    onClick={onClose}
                    className="flex items-center gap-2 text-left text-sm font-medium"
                  >
                    {RoutesInfo[route].icon && RoutesInfo[route].icon(18)}
                    {RoutesInfo[route].label}
                  </button>
                </Link>
              ))}

            <form action={logout}>
              <button
                type="submit"
                className="flex items-center gap-2 text-left text-sm font-medium text-red-500"
              >
                <LogOut size={18} /> Sair
              </button>
            </form>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}

