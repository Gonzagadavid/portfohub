import React from "react";
import { cn } from "@/lib/utils";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";

export default function DescriptionTextArea({ 
  name, 
  label, 
  control, 
  className, 
  height // Nova propriedade para altura
}) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className={cn("flex flex-col", className)}>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <textarea
              className={cn(
                "bg-background rounded-md border border-input ring-offset-background file:border-0 file:bg-transparent placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 p-2 text-sm",
                className
              )}
              {...field}
              placeholder="Digite seu resumo profissional aqui..."
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
