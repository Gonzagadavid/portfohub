"use client";

import { iconsTitles } from "@/constants/iconstitles";
import { useState } from "react";
import { Command, CommandItem, CommandList } from "@/components/ui/command";
import { createSvgImage } from "@/utils/createSvgImage";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function HardSkillsSelect({ addStack, stackList }) {
  const [input, setInput] = useState("");
  const [showList, setShowList] = useState(false);

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
  const onFocus = () => {
    setShowList(true);
  };

  const onAddStack = () => {
    if (!input) return;
    addStack(input);
    setInput("");
  };

  return (
    <Command className="rounded-lg border-none shadow-md md:min-w-[450px] h-[200px] bg-transparent">
      <div className="flex mt-10 justify-between ">
        <Input
          placeholder="Selecione suas stacks..."
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
        {options.slice(0, 10).map((title, i) => (
          <CommandItem key={`${title}${i}`}>
            <div
              className="w-full flex justify-between px-5 text-[15px]"
              onClick={onClick}
            >
              {title}
              {createSvgImage(title)}
            </div>
          </CommandItem>
        ))}
      </CommandList>
    </Command>
  );
}

