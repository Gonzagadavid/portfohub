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

  const onSelect = (skill) => {
    setInput(skill);
    setShowList(false);
  };

  const onFocus = () => {
    setShowList(true);
  };

  const onAddStack = () => {
    if (!input) return;
    addSkill(input);
    setInput("");
  };

  const onKeyUp = (event) => {
    if (event.key === "Enter") {
      onAddStack()
    }
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
          tabIndex={0}
          aria-autocomplete="list"
          aria-controls="skills-list"
          onKeyUp={onKeyUp}
          aria-activedescendant={showList ? "skills-list" : undefined}
          role="combobox"
        />
        <Button
          className="ml-5"
          onClick={onAddStack}
          aria-label="Adicionar habilidade selecionada"
          onKeyUp={onKeyUp}
          tabIndex={0}
          aria-pressed={false}
          role="button"
        >
          Adicionar
        </Button>
      </div>
      <CommandList
        id="skills-list"
        className={`${showList ? "visible" : "invisible"} w-[335px]`}
        aria-live="polite"
        role="listbox"
        aria-expanded={showList}
      >
      {options.sort((a, b) => a < b ? -1 : 1).map((skill, i) => (
          <CommandItem
            onSelect={onSelect}
            key={`${skill}${i}`}
            role="option"
            aria-selected={input === skill}
            aria-label={`Selecionar habilidade ${skill}`}
            tabIndex={0}
          >
            <div
              className="w-full flex justify-between px-5"
              onClick={onClick}
              tabIndex={0}
              aria-activedescendant={input === skill ? "active-skill" : undefined}
            >
              {skill}
            </div>
          </CommandItem>
        ))}
      </CommandList>
    </Command>
  );
}

