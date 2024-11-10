"use client";

import { Button } from "@/components/ui/button";
import { useFormState, useFormStatus } from "react-dom";
import { authenticate } from "@/lib/actions";
import * as z from "zod";
import { Form } from "@/components/ui/form";
import FormInput from "./formFieldInput";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6).max(8)
});

export default function LoginForm() {
  const [errorMessage, dispatch] = useFormState(authenticate, undefined);

  const form = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: ""
    }
  });

  return (
    <>
      <Form {...form}>
        <form
          action={form.handleSubmit(dispatch)}
          className="space-y-3 sm:w-96 w-full "
        >
          <div className="flex-1 rounded-lg  px-6 pb-4 pt-8 sm:w-96 w-full ">
            <div className="w-full flex justify-center pb-5">
              <Image
                width={240}
                height={240}
                src="/Logotipos-white.svg"
                alt="Logo da aplicação"
              />
            </div>
            <div className="w-full">
              <div>
                <FormInput control={form.control} name="email" label="E-mail" />
              </div>
              <div className="mt-4">
                <FormInput
                  control={form.control}
                  name="password"
                  label="Senha"
                  inputType="password"
                />
              </div>
            </div>
            <LoginButton />
            <div
              className="flex h-8 items-end space-x-1"
              aria-live="polite"
              aria-atomic="true"
            >
              {errorMessage && (
                <>
                  <p className="text-sm text-red-500">{errorMessage}</p>
                </>
              )}
            </div>
          </div>
        </form>
      </Form>
    </>
  );
}

function LoginButton() {
  const { pending } = useFormStatus();

  return (
    <Button className="mt-4 w-full" type="submit" aria-disabled={pending}>
      Entrar
    </Button>
  );
}

