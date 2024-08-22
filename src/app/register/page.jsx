"use client";

import FormFieldInput from "@/components/custom/formFieldInput";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Form, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import useSWRMutation from "swr/mutation";
import { sendRequest } from "@/lib/sendRequest";

const formSchema = z.object({
  fullName: z.string(),
  email: z.string().email({ message: "e-mail inválido" }),
  password: z
    .string()
    .min(6, { message: "a senha deve conter no mínimo 6 caracteres" })
    .max(8, { message: "a senha deve conter no máximo 8 caracteres" })
});

export default function Register() {
  const [confirmPassword, setConfirmPassword] = useState("");
  const [confirmError, setConfirmError] = useState(false);
  const { trigger, isMutating } = useSWRMutation(
    "/users/register",
    sendRequest
  );

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      password: ""
    }
  });

  const onChangeConfirm = (event) => {
    setConfirmPassword(event.target.value);

    if (event.target.value !== form.getValues("password")) {
      setConfirmError(true);
    } else {
      setConfirmError(false);
    }
  };

  const onSubmit = async (values) => {
    if (confirmError) return;
    try {
      await trigger(values);
      toast.success("Cadastro efetuado com sucesso");
    } catch {
      toast.error("Ocorreu um erro durante o envio do cadastro");
    }
  };

  return (
    <div className="pt-20">
      <Card className="w-[50%] mx-auto p-10 bg-secondary">
        <CardTitle className="text-center">Cadastro</CardTitle>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormFieldInput
                name="fullName"
                control={form.control}
                label="Nome Completo"
              />
              <FormFieldInput
                name="email"
                control={form.control}
                label="E-mail"
                className="w-[45%]"
              />
              <div className="flex justify-between">
                <FormFieldInput
                  name="password"
                  control={form.control}
                  label="Senha"
                  className="w-[45%]"
                  inputType="password"
                />
                <div className="space-y-2 w-[45%]">
                  <Label>Confimar Senha</Label>
                  <Input
                    type="password"
                    value={confirmPassword}
                    onChange={onChangeConfirm}
                  />
                  {confirmError && (
                    <FormMessage>password incorreto</FormMessage>
                  )}
                </div>
              </div>
              <div className="flex justify-end">
                <Button type="submit">Registrar</Button>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
