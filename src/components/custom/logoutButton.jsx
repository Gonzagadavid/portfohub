import { logout } from "@/lib/actions";
import { LogOut } from "lucide-react";
import { Button } from "../ui/button";

export default function LogoutButton() {
  return (
    <form action={logout}>
      <Button variant="ghost" className="text-white hover:bg-black hover:text-white">
        <LogOut size={30} />
      </Button>
    </form>
  );
}
