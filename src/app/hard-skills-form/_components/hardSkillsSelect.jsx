"use client";

import { iconsTitles } from "@/constants/iconstitles";
import { useState } from "react";
import { Command, CommandItem, CommandList } from "@/components/ui/command";
import { createSvgImage } from "@/utils/createSvgImage";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useTheme } from "next-themes";

export default function HardSkillsSelect({ addStack, stackList }) {
  const [input, setInput] = useState("");
  const [showList, setShowList] = useState(false);
  const { theme }= useTheme()

  const options = iconsTitles.filter(
    (title) =>
      !stackList.has(title) && title.toLowerCase().includes(input.toLowerCase())
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
    addStack(input);
    setInput("");
  };

  const onKeyUp = (event) => {
    if (event.key === "Enter") {
      onAddStack()
    };
  };

  return (
    <Command className="rounded-lg border-none shadow-md md:min-w-[450px] h-[200px] bg-transparent">
      <div className="flex mt-10 justify-between ">
        <Input
          placeholder="Selecione suas stacks..."
          onChange={onChange}
          value={input}
          onFocus={onFocus}
          tabIndex={0}
          role="textbox"
          aria-autocomplete="list"
          aria-controls="skills-list"
          aria-activedescendant={showList && options.length ? `option-0` : ""}
          aria-describedby="skills-description"
        />
        <Button className="ml-5"
          onClick={onAddStack}
          onKeyUp={onKeyUp}
          aria-label="Adicionar stack"
          role="button"
          aria-pressed="false"
          tabIndex={0}
          >
          Adicionar
        </Button>
      </div>
      <CommandList
        id="skills-list"
        role="listbox"
        className={`${showList ? "visible" : "invisible"} w-[335px]`}
        aria-live="polite"
        aria-labelledby="skills-description"
      >
        {options.slice(0, 10).map((title, i) => (
          <CommandItem
            onSelect={onSelect}
            key={`${title}${i}`}
            role="option"
            id={`option-${i}`}
            aria-selected={input === title}
            tabIndex={-1}
            aria-label={`Selecionar stack ${title}`}
            aria-describedby="skill-description"
          >
            <div
              className="w-full flex justify-between px-5 text-[15px]"
              onClick={onClick}
            >
              {title}
              {createSvgImage(title, 20, 20, theme === 'root')}
            </div>
          </CommandItem>
        ))}
      </CommandList>
    </Command>
  );
}

