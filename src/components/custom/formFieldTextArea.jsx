import { cn } from "@/lib/utils";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "../ui/form";

export default function PersonalDataFormItem({ 
  name, 
  label, 
  control, 
  className 
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
              className="bg-background rounded-md border border-input ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              {...field}
              style={{ resize: "none", height: "150px" }} // Define a altura desejada aqui
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
