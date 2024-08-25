import LoginForm from "@/components/custom/loginForm";
import { auth } from "../api/auth/auth";
import { validateExp } from "@/utils/validateExp";
import { redirect } from "next/navigation";
import dynamic from "next/dynamic";

const ExpiresModal = dynamic(() =>
  import("@/components/custom/ExpiresModal", { ssr: false })
);

export default async function Login() {
  const session = await auth();
  if (session && validateExp(session.expires)) {
    redirect("/dashboard");
  }
  return (
    <div className="flex items-center justify-center w-full h-full  flex-col ">
      <ExpiresModal />
      <LoginForm />
    </div>
  );
}
