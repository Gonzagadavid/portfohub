"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import FormFieldInput from "@/components/custom/formFieldInput";
import AddressInputField from "@/components/custom/addressInputField";
import NetworkInputField from "@/components/custom/networkInputField";
import { Card } from "@/components/ui/card";
import DescriptionTextArea from "@/components/custom/descriptionTextArea";
import useSWRMutation from "swr/mutation";
import { sendRequest } from "@/lib/sendRequest";
import { toast } from "sonner";

// Validação do formulário
const formSchema = z.object({
  fullName: z.string().min(1, "Nome Completo é obrigatório"),
  email: z.string().email().min(1, "E-mail profissional é obrigatório"),
  address: z.object({
    city: z.string().min(1, "Cidade é obrigatória"),
    state: z.string().min(1, "Estado é obrigatório"),
  }),
  description: z.string().min(1, "Resumo Profissional é obrigatório"),
  network: z.object({
    github: z.string().optional(),
    linkedin: z.string().optional(),
    instagram: z.string().optional(),
    whatsapp: z.string().optional(),
  }),
  phrase: z.string().optional(),
});

//VERIFICAR TRIGGER SE ESTÁ CERTO!!!!!!!!!!!
export default function PersonalDataForm() {
  const [personalData, setPersonalData] = useState({
    fullName: "",
    email: "",
    address: {
      city: "",
      state: "",
    },
    description: "",
    network: {
      github: "",
      linkedin: "",
      instagram: "",
      whatsapp: "",
    },
    phrase: "",
  }); // Estado para armazenar dados pessoais
  const { trigger } = useSWRMutation("personal-data", sendRequest); // Endpoint onde os dados serão enviados
  /////////////////////////////////////////////////////////////////////////////

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      address: {
        city: "",
        state: "",
      },
      description: "",
      network: {
        github: "https://github.com/",
        linkedin: "https://linkedin.com/in/",
        instagram: "https://instagram.com/",
        whatsapp: "https://wa.me/",
      },
      phrase: "",
    },
  });

  ///////////////////////////////////////////////////////////
  const onSubmit = async (data) => {
    try {
      await trigger(data); // Passando 'data' para a função trigger
      setPersonalData(data); // Armazenando os dados no estado
      toast.success("Seus dados pessoais foram registrados com sucesso");
    } catch {
      toast.error("Ocorreu um erro ao enviar o formulário de dados pessoais.");
    }
  };
  /////////////////////////////////////////////////////////

  return (
    <div className="flex flex-col items-center w-[80%] mx-auto">
      <h1 className="mt-5">Formulário de Dados Pessoais</h1>
      <Card className="w-full p-5 mt-5 mb-5">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormFieldInput
              name='fullName'
              label='Nome Completo'
              control={form.control}
            />
            <FormFieldInput
              name='email'
              label='E-mail'
              control={form.control}
            />
            <AddressInputField
              name='address'
              label='Endereço'
              control={form.control}
            />
            <NetworkInputField
              name='network'
              label='Redes Sociais'
              control={form.control}
            />
            <DescriptionTextArea
              name='description'
              label='Resumo Profissional'
              control={form.control}
            />
            <FormFieldInput
              name='phrase'
              label='Frase Motivacional'
              control={form.control}
            />
            <div className="flex justify-end">
              <Button type="submit">Salvar</Button>
            </div>
          </form>
        </Form>
      </Card>
    </div>
  );
}
