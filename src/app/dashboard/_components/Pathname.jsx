"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useDebounce } from "@/hooks/useDebounce";
import { headFetcher } from "@/lib/headFetcher";
import { sendRequest } from "@/lib/sendRequest";
import { useState, useCallback, useEffect } from "react";
import { toast } from "sonner";
import { useSWRConfig } from "swr";
import useSWRMutation from "swr/mutation";

export default function Pathname() {
  const [isUsed, setIsUsed] = useState(false);
  const [pathnameInput, setPathnameInput] = useState("");
  const pathnameDebounce = useDebounce(pathnameInput);
  const { mutate } = useSWRConfig();
  const { trigger } = useSWRMutation("/portfolio/pathname", sendRequest, {
    onSuccess() {
      toast.success("Seu link para o portfólio foi registrado com sucesso!");
      mutate("/portfolio/requirements");
    },
    onError() {
      toast.error("Ocorreu um erro ao tentar registar seu link!");
    }
  });

  const onSendPathname = async () => {
    if (pathnameDebounce.length < 5) {
      toast.error("O pathname deve conter no mínimo 5 caracters");
      return;
    }
    await trigger({
      data: { pathname: pathnameInput },
      method: "POST"
    });
  };

  const onChange = ({ target }) => {
    setPathnameInput(target.value.replace(/[^a-z\-]/g, ""));
  };

  const isUsedChecker = useCallback(async () => {
    if (pathnameDebounce.length < 5) return;
    const resp = await headFetcher(
      `/portfolio/pathname-is-used/${pathnameDebounce}`,
      200
    );
    if (!resp) {
      setIsUsed(true);
      return;
    }
    setIsUsed(false);
  }, [pathnameDebounce, setIsUsed]);

  useEffect(() => {
    isUsedChecker();
  }, [isUsedChecker]);

  return (
    <>
      <h2 className="text-[20px]">
        Crie um nome de usuário para gerar o link e acessar seu portfólio
        personalizado.
      </h2>
      <div className="flex items-end w-[700px] justify-between mt-10">
        <p className="text-[30px]">{`${process.env.NEXT_PUBLIC_APP_URL}/portfolio/`}</p>
        <div className="flex flex-col relative">
          <Input
            onChange={onChange}
            value={pathnameInput}
            className={`text-[30px] align-baseline leading-[0px] py-0 pt-4 flex items-end m-0 border-x-0 border-t-0 focus-visible:ring-0 focus-visible:border-b-2 focus-visible:border-ring rounded-none h-[60px] w-[200px] ${
              isUsed
                ? "border-[#ED1414] border-b-2 focus-visible:border-[#ED1414]"
                : "border-ring"
            }`}
          />
          {pathnameInput.length >= 5 && isUsed && (
            <p className="absolute bottom-[-45px] px-2 text-[#ED1414] text-[13px]">
              Este path está já está sendo usado
            </p>
          )}
        </div>
        <Button className="ml-5" onClick={onSendPathname}>
          Adicionar
        </Button>
      </div>
    </>
  );
}
