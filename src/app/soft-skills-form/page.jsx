"use client";

import { useState } from "react";
import SoftSkillsSelect from "./_components/softSkillsSelect";
import useSWR from "swr";
import useSWRMutation from "swr/mutation";
import { fetcher } from "@/lib/fetcher";
import { sendRequest } from "@/lib/sendRequest";
import { Button } from "@/components/ui/button";
import { Card, CardTitle } from "@/components/ui/card";
import { X } from "lucide-react";
import { toast } from "sonner";

export default function SoftSkillsForm() {
  const [isEditable, setIsEditable] = useState(false);
  const [skillList, setSkillList] = useState([]);
  useSWR("/soft-skills", fetcher, {
    onSuccess({ info }) {
      setSkillList([...info]);
      setIsEditable(true);
    }
  });

  const { trigger } = useSWRMutation("/soft-skills", sendRequest);

  const onSave = async () => {
    try {
      await trigger({ data: skillList, method: isEditable ? "PUT" : "POST" });
      toast.success("Suas skills foram registradas com sucesso");
    } catch {
      toast.error("Ocorreu um erro no envio de soft skills");
    }
  };

  const addSkill = (skill) => {
    setSkillList((prev) => [...prev, skill]);
  };

  const removeStack = (index) => () => {
    setSkillList((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="flex flex-col items-center pt-10 relative min-h-lvh">
      <div className="flex mt-10 justify-between">
        <SoftSkillsSelect addSkill={addSkill} skillList={new Set(skillList)} />
      </div>
      <div className="flex justify-around flex-wrap w-full mb-10">
        {skillList.map((skill, index) => (
          <Card
            className="h-32 w-80 flex flex-col items-center m-10 px-3"
            key={skill}
          >
            <div className="w-full flex justify-end ">
              <Button size="sm" variant="ghost" onClick={removeStack(index)}>
                <X />
              </Button>
            </div>
            <CardTitle className="pt-2 break-word">{skill}</CardTitle>
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

