"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";

import FormFieldInput from "@/components/custom/formFieldInput";
import { Card } from "@/components/ui/card";

import FormFieldTextArea from "@/components/custom/formFieldTextArea";
import StackSelect from "./StackSelect";
import { iconsTitlesSet } from "@/constants/iconstitles";
import { createSvgImage } from "@/utils/createSvgImage";
import { useState } from "react";

const formSchema = z.object({
  projectName: z.string().min(3, { message: "Nome do projeto é obrigatório" }),
  link: z.string().min(3, { message: "O link para projeto" }),
  description: z
    .string()
    .min(3, { message: "A descrição sobre o projeto é obrigatório" }),
  icons: z.array(z.string())
});

const initialValues = {
  projectName: "",
  link: "",
  description: "",
  icons: []
};

export default function ProjectFormItem({
  addItemInList,
  item,
  removeItemList,
  index
}) {
  const defaultValues = item || { ...initialValues };
  const [, setStackList] = useState(item?.icons ?? []);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues
  });

  const onSubmit = (values) => {
    addItemInList(values, index);
    form.reset(values, { keepValues: true });
  };

  const addStack = (stack) => {
    const stacks = form.getValues("icons") ?? [];
    setStackList((prev) => [...prev, stack]);
    form.setValue("icons", [...stacks, stack]);
  };

  return (
    <Card className=" w-full p-5 mt-5">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <div className="flex justify-between">
            <FormFieldInput
              name="projectName"
              label="Nome do projeto"
              control={form.control}
              className="w-[55%]"
            />
            <FormFieldInput
              name="link"
              label="Link para repositório ou deploy do projeto"
              control={form.control}
              className="w-[40%]"
            />
          </div>

          <div className="flex justify-between">
            <FormFieldTextArea
              name="description"
              label="Descrição"
              control={form.control}
              className="w-[55%] h-[100px]"
            />
            <div className="w-[40%]">
              <div className="flex w-full flex-col items-between items-end">
                <StackSelect
                  addStack={addStack}
                  stackList={new Set(form.getValues("icons") ?? [])}
                />
                <div className="w-full flex justify-around">
                  {form
                    .getValues("icons")
                    .map((stack) =>
                      iconsTitlesSet.has(stack)
                        ? createSvgImage(stack, 50, 50)
                        : stack
                    )}
                </div>
              </div>
              <div className="flex justify-end w-full mt-10">
                {(!!index || index === 0) && form.formState.isDirty && (
                  <Button type="submit">Salvar</Button>
                )}
                {!index && index !== 0 && (
                  <Button type="submit">Adicionar</Button>
                )}
                {(index || index === 0) && (
                  <Button onClick={() => removeItemList(index)}>Remover</Button>
                )}
              </div>
            </div>
          </div>
        </form>
      </Form>
    </Card>
  );
}
