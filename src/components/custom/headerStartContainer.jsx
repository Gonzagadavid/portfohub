"use client";

import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, LogOut, Home, X } from "lucide-react";
import Link from "next/link";
import { Routes, RoutesInfo } from "@/constants/routes";
import { logout } from "@/lib/actions";

const routesMenu = Object.keys(RoutesInfo);

export function HeaderStartContainer() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const onClose = () => setIsOpen(false);
  const onToggle = () => setIsOpen((prev) => !prev);

  const handleClickOutside = (e) => {
    if (isOpen && !e.target.closest("#sidebar")) {
      onClose();
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("click", handleClickOutside);
    } else {
      document.removeEventListener("click", handleClickOutside);
    }
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isOpen]);

  if (pathname === Routes.HOME) return null;

  return (
    <>
      {!isOpen && (
        <button
          onClick={onToggle}
          className=" top-4 left-4 z-50 bg-black p-2 rounded"
        >
          <Menu size={30} color="white" />
        </button>
      )}

      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={onClose}
        />
      )}

      <div
        id="sidebar"
        className={`fixed top-0 left-0 h-full w-64 bg-gray-900 text-white transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-50`}
      >
        <div className="flex items-center justify-between p-4">
          <span className="text-lg font-semibold">Menu</span>
          <button
            onClick={onClose}
            className="text-white"
          >
            <X size={24} />
          </button>
        </div>

        <hr className="border-gray-700" />

        <div className="flex flex-col gap-4 p-6">
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
      </div>
    </>
  );
}
