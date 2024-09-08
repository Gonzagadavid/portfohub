import { Routes, RoutesInfo } from "@/constants/routes";
import Link from "next/link";
import { Card, CardContent, CardDescription } from "../ui/card";

const routesNotListed = [Routes.DASHBOARD];

const routesMenu = Object.keys(RoutesInfo).filter(
  (route) => !routesNotListed.includes(route)
);

export default function MenuBoard() {
  return (
    <div className="flex justify-around  w-[60%] p-10 mt-10">
      {routesMenu.map((route) => (
        <Link key={route} href={route}>
          <Card className=" flex flex-col items-center w-40 h-44 p-2">
            <CardContent>
              {RoutesInfo[route].icon && RoutesInfo[route].icon(100)}
            </CardContent>
            <CardDescription className="text-center">
              {RoutesInfo[route].label}
            </CardDescription>
          </Card>
        </Link>
      ))}
    </div>
  );
}
