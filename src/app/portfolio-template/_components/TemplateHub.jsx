"use client";

import { templatesMap } from "@/app/portfolio/_components/templateMap";
import { Button } from "@/components/ui/button";
import { camelCaseToWords } from "@/utils/camelCaseToWords";
import { useState, cloneElement } from "react";

export default function TemplateHub({ portfolioData }) {
  const [template, setTemplate] = useState(
    portfolioData.template ?? "blackLabel"
  );

  const onChangeTemplate = (templateSelected) => {
    setTemplate(templateSelected);
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
      <Button className="fixed bottom-[50px] right-[20px] z-[999]">
        Selecionar template
      </Button>
    </div>
  );
}
