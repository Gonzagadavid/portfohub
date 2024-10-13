import LoginForm from "@/components/custom/loginForm";
import { auth } from "../api/auth/auth";
import { validateExp } from "@/utils/validateExp";
import { redirect } from "next/navigation";
import dynamic from "next/dynamic";
import { Routes } from "@/constants/routes";
import Link from "next/link";

const ExpiresModal = dynamic(() =>
  import("@/components/custom/ExpiresModal", { ssr: false })
);

export default async function Login() {
  const session = await auth();
  if (session && validateExp(session.expires)) {
    redirect(Routes.DASHBOARD);
  }
  return (
    <div className="flex items-center justify-center w-full h-full  flex-col ">
      <ExpiresModal />
      <LoginForm />
      <Link className="text-primary" href={Routes.REGISTER}>
        Cadastrar-se
      </Link>
    </div>
  );
}
