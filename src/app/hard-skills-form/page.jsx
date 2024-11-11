"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { iconsTitlesSet } from "@/constants/iconstitles";
import { fetcher } from "@/lib/fetcher";
import { sendRequest } from "@/lib/sendRequest";
import { createSvgImage } from "@/utils/createSvgImage";
import { useRouter } from 'next/navigation';
import { Routes } from "@/constants/routes";
import { X } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import useSWR from "swr";
import useSWRMutation from "swr/mutation";
import HardSkillsSelect from "./_components/hardSkillsSelect";

export default function HardSkillsForm() {
  const [isEditable, setIsEditable] = useState(false);
  const [stackList, setStackList] = useState([]);
  const router = useRouter();
  useSWR("/hard-skills", fetcher, {
    onSuccess({ info }) {
      setStackList([...info]);
      setIsEditable(true);
    }
  });

  const { trigger } = useSWRMutation("/hard-skills", sendRequest);

  const onSave = async () => {
    try {
      await trigger({ data: stackList, method: isEditable ? "PUT" : "POST" });
      toast.success("Suas stacks foram registradas com sucesso");
      router.push(Routes.DASHBOARD);
    } catch {
      toast.error("Ocorreu um erro no envio de hard skills");
    }
  };

  const addStack = (stack) => {
    setStackList((prev) => [...prev, stack]);
  };

  const removeStack = (index) => () => {
    setStackList((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="flex flex-col items-center pt-10 relative min-h-lvh">
      <div className="flex mt-10 justify-between">
        <HardSkillsSelect addStack={addStack} stackList={new Set(stackList)} />
      </div>
      <div className="flex justify-around flex-wrap w-full mb-10">
        {stackList.map((stack, index) => (
          <Card
            className="h-48 w-48 flex flex-col items-center m-10 px-3"
            key={stack}
          >
            <div className="w-full flex justify-end ">
              <Button size="sm" variant="ghost" onClick={removeStack(index)}>
                <X />
              </Button>
            </div>
            <CardTitle className="pt-2 break-all">{stack}</CardTitle>
            <CardContent className="mt-5">
              {iconsTitlesSet.has(stack) ? createSvgImage(stack, 50, 50) : ""}
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="absolute bottom-5 right-10">
        <Button size="lg" onClick={onSave}>
          Salvar Alterações
        </Button>
      </div>
    </div>
  );
}

