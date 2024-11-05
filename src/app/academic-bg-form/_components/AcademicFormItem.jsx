"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";

import FormFieldInput from "@/components/custom/formFieldInput";
import { Card } from "@/components/ui/card";
import DatePicker from "@/components/custom/datePicker";
import { Label } from "@/components/ui/label";
import { useState } from "react";

const formSchema = z.object({
  institution: z
    .string()
    .min(3, { message: "Nome da instituição é obrigatório" }),
  degree: z.string().min(3, { message: "Nome do curso é obrigatório" }),
  startDate: z.date({ message: "A data de início é obrigatória" }),
  endDate: z.date().nullable()
});

const initialValues = {
  institution: "",
  degree: "",
  startDate: "",
  endDate: null
};

export default function AcademicFormItem({
  addItemInList,
  item,
  removeItemList,
  index
}) {
  const defaultValues = item || { ...initialValues };
  const [currentEmployment, setCurrentEmployment] = useState(
    !!index && !item.endDate
  );
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues
  });

  const onChangeCurrentEmployment = () => {
    setCurrentEmployment((prev) => !prev);
    form.resetField("endDate");
  };

  const onSubmit = (values) => {
    if (!currentEmployment && form.getValues("endDate") === null) {
      form.setError("endDate", {
        message: "A data final é obrigatória"
      });
      return;
    }
    addItemInList(values, index);
    form.reset(values, { keepValues: true });
  };

  return (
    <Card className="w-full p-5 mt-5">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <div className="flex flex-col sm:flex-row justify-between gap-4">
            <FormFieldInput
              name="institution"
              label="Instituição"
              control={form.control}
              className="w-full"
            />
            <FormFieldInput
              name="degree"
              label="Curso"
              control={form.control}
              className="w-full"
            />
          </div>

          <div className="flex flex-col sm:flex-row justify-between gap-4 lg:w-1/3 sm:w-full">
            <DatePicker
              name="startDate"
              label="Data de início"
              control={form.control}
              className="w-full"
            />
            {!currentEmployment && (
              <DatePicker
                name="endDate"
                label="Data final"
                control={form.control}
                className="w-full"
              />
            )}
          </div>

          <div className="flex justify-end gap-2 mt-5">
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
        </form>
      </Form>
    </Card>
  );
}
