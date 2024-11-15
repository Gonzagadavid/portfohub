"use client";

import { iconsTitles } from "@/constants/iconstitles";
import { useState } from "react";
import { Command, CommandItem, CommandList } from "@/components/ui/command";
import { createSvgImage } from "@/utils/createSvgImage";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useTheme } from "next-themes";

export default function StackSelect({ addStack, stackList }) {
  const [input, setInput] = useState("");
  const [showList, setShowList] = useState(false);
  const { theme } = useTheme();

  const options = iconsTitles.filter(
    (title) =>
      !stackList.has(title) && title.toLowerCase().includes(input.toLowerCase())
  );

  const onChange = (event) => {
    if (!showList) setShowList(true);
    setInput(event.target.value);
  };

  const onClick = (event) => {
    setInput(event.target.innerText);
    setShowList(false);
  };

  const onFocus = () => setShowList(true);

  const onAddStack = () => {
    if (!input) return;
    addStack(input);
    setInput("");
  };

  return (
    <Command className="rounded-lg border-none shadow-md md:min-w-[450px]">
      <div className="flex flex-col md:flex-row md:items-center md:space-x-4">
        <Input
          placeholder="Selecione as stacks usadas no projeto..."
          onChange={onChange}
          value={input}
          onFocus={onFocus}
          className="w-full md:w-[450px]"
        />
        <Button
          type="button"
          className="mt-4 md:mt-0 md:w-auto"
          onClick={onAddStack}
        >
          Adicionar Stack
        </Button>
      </div>
      <CommandList
        className={`${showList ? "visible" : "hidden"} w-full md:w-[450px] mt-4 md:mt-2`}
      >
        {options.slice(0, 10).map((title, i) => (
          <CommandItem key={`${title}${i}`} className="px-3 py-2 cursor-pointer hover:bg-gray-500">
            <div
              className="w-full flex justify-between items-center gap-x-4"
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
