"use client";
import { Routes, RoutesInfo } from "@/constants/routes";
import Link from "next/link";
import { Card, CardContent, CardDescription } from "../ui/card";
import { Check, X } from "lucide-react";

const routesNotListed = [Routes.DASHBOARD, Routes.PORTFOLIO_TEMPLATE];

const routesMenu = Object.keys(RoutesInfo).filter(
  (route) => !routesNotListed.includes(route)
);

const checkListKeys = {
  [Routes.ACADEMIC_BG_FORM]: "academic",
  [Routes.HARD_SKILLS_FORM]: "hardSkills",
  [Routes.USER_FORM]: "personalData",
  [Routes.PROFESSIONAL_EXP_FORM]: "professional",
  [Routes.PROJECTS_FORM]: "projects",
  [Routes.SOFT_SKILLS_FORM]: "softSkills"
};

export default function MenuBoard({ checkInfo }) {
  return (
    <div className="flex justify-around  w-[70%] p-10 mt-10">
      {routesMenu.map((route) => {
        const isComplete = checkInfo?.[checkListKeys[route]];
        return (
          <Link key={route} href={route}>
            <Card className=" flex flex-col  items-center w-44 h-60 p-5">
              <div className="flex justify-end w-full">
                {isComplete ? (
                  <Check className="text-[#03C03C]" />
                ) : (
                  <X className="text-[#ED1414]" />
                )}
              </div>
              <CardContent>
                {RoutesInfo[route].icon && RoutesInfo[route].icon(100)}
              </CardContent>
              <CardDescription className="text-center">
                {RoutesInfo[route].label}
              </CardDescription>
            </Card>
          </Link>
        );
      })}
    </div>
  );
}
