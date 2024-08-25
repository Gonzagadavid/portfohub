"use client";
import { useSession } from "next-auth/react";
import MessageModal from "./messageModal";
import { useEffect, useState } from "react";
import { validateExp } from "@/utils/validateExp";

export default function ExpiresModal() {
  const session = useSession();
  const [open, setOpen] = useState(false);
  const onClose = () => setOpen(false);

  useEffect(() => {
    if (session?.data && !validateExp(session.data.expires)) {
      setOpen(true);
    }
  }, [session?.data]);
  return (
    <MessageModal title="Atenção" open={open} onClose={onClose}>
      <h3 className="m-2 text-center">Sua sessão expirou!</h3>
      <p className="m-4 text-center">Por favor, efetue o login novamente</p>
    </MessageModal>
  );
}
