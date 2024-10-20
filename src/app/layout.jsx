import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { Toaster } from "@/components/ui/sonner";
import { SessionProvider } from "next-auth/react";
import Header from "@/components/custom/header";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={cn(
          inter.className,
          "pt-[85px]",
          "bg-gradient-to-t from-[#1C0942] via-black  to-black"
        )}
      >
        <Header />
        <SessionProvider
          refetchOnWindowFocus={false}
          refetchWhenOffline={false}
        >
          <ThemeProvider attribute="class" theme="dark">
            {children}
          </ThemeProvider>
          <Toaster position="top-center" richColors />
        </SessionProvider>
      </body>
    </html>
  );
}
