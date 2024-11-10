"use client";

import { useState } from "react";
import { Command, CommandItem, CommandList } from "@/components/ui/command";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { softSkills } from "@/constants/softSkills";

export default function SoftSkillsSelect({ addSkill, skillList }) {
  const [input, setInput] = useState("");
  const [showList, setShowList] = useState(false);

  const options = softSkills.filter(
    (skill) =>
      !skillList.has(skill) && skill.toLowerCase().includes(input.toLowerCase())
  );

  const onChange = (event) => {
    if (!showList) setShowList(true);
    setInput(event.target.value);
  };
  const onClick = (event) => {
    if (showList) setShowList(false);
    setInput(event.target.innerText);
  };
  const onFocus = () => {
    setShowList(true);
  };

  const onAddStack = () => {
    if (!input) return;
    addSkill(input);
    setInput("");
  };

  return (
    <Command className="rounded-lg border-none shadow-md md:min-w-[450px] h-[200px]  bg-transparent">
      <div className="flex mt-10 justify-between">
        <Input
          placeholder="Selecione suas stacks..."
          aria-label="Selecione suas stacks"
          onChange={onChange}
          value={input}
          onFocus={onFocus}
        />
        <Button className="ml-5" onClick={onAddStack}>
          Adicionar
        </Button>
      </div>
      <CommandList
        className={`${showList ? "visible" : "invisible"} w-[335px]`}
      >
        {options.map((skill, i) => (
          <CommandItem key={`${skill}${i}`}>
            <div className="w-full flex justify-between px-5" onClick={onClick}>
              {skill}
            </div>
          </CommandItem>
        ))}
      </CommandList>
    </Command>
  );
}

