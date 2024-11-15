'use client'

import { useTheme } from "next-themes";
import { Button } from "../ui/button";
import { Moon, Sun } from "lucide-react";

export default function ThemeButton() {
    const {theme, setTheme }=  useTheme()

    console.log(theme)
    return (
        <Button variant='ghost' onClick={() => setTheme(theme === 'dark' ? 'root' : 'dark')} className='ml-5 hover:bg-black'>
         {theme === 'dark' ? <Sun className="text-white"/> : <Moon className="text-white" />}
        </Button>
    )
} 