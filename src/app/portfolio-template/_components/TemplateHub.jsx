"use client";

import { templatesMap } from "@/app/portfolio/_components/templateMap";
import { Button } from "@/components/ui/button";
import { Routes } from "@/constants/routes";
import { sendRequest } from "@/lib/sendRequest";
import { camelCaseToWords } from "@/utils/camelCaseToWords";
import { useRouter } from "next/navigation";
import { useState, cloneElement } from "react";
import { toast } from "sonner";
import useSWRMutation from "swr/mutation";

export default function TemplateHub({ portfolioData }) {
  const [template, setTemplate] = useState(
    portfolioData.template ?? "blackLabel"
  );

  const route = useRouter();
  const { trigger } = useSWRMutation("/portfolio/template", sendRequest, {
    onSuccess() {
      toast.success("Seu link para o portfólio foi registrado com sucesso!");
    },
    onError() {
      toast.error("Ocorreu um erro ao tentar registar seu link!");
    }
  });

  const onChangeTemplate = (templateSelected) => {
    setTemplate(templateSelected);
  };

  const onSendTemplate = async () => {
    await trigger({ data: { template }, method: "PUT" });
    route.push(Routes.DASHBOARD);
  };

  return (
    <div>
      <div className="flex w-full bg-black bg-opacity-40 justify-around p-5 fixed top-0 left-0 z-[999]">
        {Object.keys(templatesMap).map((templateKey) => (
          <Button
            onClick={() => onChangeTemplate(templateKey)}
            key={templateKey}
            className={template === templateKey && "border-2 border-white"}
          >
            {camelCaseToWords(templateKey)}
          </Button>
        ))}
      </div>
      {cloneElement(templatesMap[template], { portfolioData })}
      <Button
        onClick={onSendTemplate}
        className="fixed bottom-[50px] right-[20px] z-[999]"
      >
        Selecionar template
      </Button>
    </div>
  );
}
