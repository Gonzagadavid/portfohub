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
  link: z.string().min(3, { message: "O link para projeto é obrigatório" }),
  description: z.string().min(3, { message: "A descrição sobre o projeto é obrigatória" }),
  icons: z.array(z.string())
});

const initialValues = {
  projectName: "",
  link: "",
  description: "",
  icons: []
};

export default function ProjectFormItem({ addItemInList, item, removeItemList, index }) {
  const defaultValues = item || { ...initialValues };
  const [stackList, setStackList] = useState(item?.icons ?? []);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues
  });

  const onSubmit = (values) => {
    addItemInList(values, index);
    form.reset(values, { keepValues: true });
  };

  const addStack = (stack) => {
    const currentIcons = form.getValues("icons") ?? [];
    setStackList(prev => [...prev, stack]);
    form.setValue("icons", [...currentIcons, stack]);
  };

  const removeStack = (stackToRemove) => {
    const currentIcons = form.getValues("icons") ?? [];
    const updatedIcons = currentIcons.filter(stack => stack !== stackToRemove);
    setStackList(updatedIcons);
    form.setValue("icons", updatedIcons);
  };


  return (
    <Card className=" w-full p-5 mt-5">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <div className="flex flex-col md:flex-row gap-4">
            <FormFieldInput
              name="projectName"
              label="Nome do projeto"
              control={form.control}
              className="flex-1"
            />
            <FormFieldInput
              name="link"
              label="Link para repositório ou deploy do projeto"
              control={form.control}
              className="flex-1"
            />
          </div>

          <div>
            <FormFieldTextArea
              name="description"
              label="Descrição"
              control={form.control} 
              />
          </div>

          <div>
            <StackSelect
              addStack={addStack}
              stackList={new Set(form.getValues("icons") ?? [])}
            />
            <div>
              <div className="grid grid-cols-3 gap-1 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 justify-items-center">
                {form
                  .getValues("icons")
                  .map((stack, index) => (
                    <div key={index} className="flex items-center justify-center w-14 h-14 border p-1 rounded-lg relative mt-10"
                    >
                      {iconsTitlesSet.has(stack) ? createSvgImage(stack, 100, 100) : stack}
                      <button
                        type="button"
                        className="absolute top-0 right-0 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center"
                        onClick={() => removeStack(stack)}
                      >
                        &times;
                      </button>
                    </div>
                  ))}
              </div>

              <div className="flex justify-end gap-2 mt-10">
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
