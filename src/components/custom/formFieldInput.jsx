import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "../ui/form";
import { Input } from "../ui/input";

export default function FormFieldInput({
  name,
  label,
  control,
  className,
  inputType
}) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className={className}>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Input type={inputType} {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
