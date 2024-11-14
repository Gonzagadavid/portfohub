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
import FormFieldTextArea from "@/components/custom/formFieldTextArea";
import DescriptionTextArea from "@/components/custom/descriptionTextArea";

const formSchema = z.object({
  company: z.string().min(3, { message: "Nome da empresa é obrigatório" }),
  role: z.string().min(3, { message: "Nome do cargo é obrigatório" }),
  description: z.string(),
  startDate: z.date({ message: "A data de início é obrigatória" }),
  endDate: z.date().nullable()
});

const initialValues = {
  company: "",
  role: "",
  description: "",
  startDate: "",
  endDate: null
};

export default function ProfessionalFormItem({
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
    <Card className="w-full p-5 mt-5" role="form" aria-labelledby="professional-form">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8"
          aria-live="polite"
          aria-describedby="form-description"
        >
          <div className="flex flex-col md:flex-row md:gap-4">
            <FormFieldInput
              name="company"
              label="Empresa"
              control={form.control}
              className="flex-1"
              aria-label="Nome da empresa"
              tabIndex={0} // Garantindo que a navegação siga a ordem natural
              id="company-input"
            />
            <FormFieldInput
              name="role"
              label="Cargo"
              control={form.control}
              className="flex-1"
              aria-label="Nome do cargo"
              tabIndex={1}
              id="role-input"
            />
          </div>
          <FormFieldTextArea
            name="description"
            label="Descrição"
            control={form.control}
            aria-label="Descrição da experiência"
            tabIndex={2}
            id="description-input"
          />
          <div className="flex flex-col md:flex-row gap-4 mt-4">
            <DatePicker
              name="startDate"
              label="Data de início"
              control={form.control}
              style={{ width: "300px" }}
              aria-label="Data de início da experiência"
              aria-required="true"
              tabIndex={3}
              id="start-date-picker"
            />
            {!currentEmployment && (
              <DatePicker
                name="endDate"
                label="Data final"
                control={form.control}
                style={{ width: "300px" }}
                aria-label="Data final da experiência"
                tabIndex={4}
                id="end-date-picker"
              />
            )}
          </div>
          <div className="flex flex-col justify-between mt-2">
            <Label className="flex items-center" aria-label="Emprego atual">
              <input
                type="radio"
                checked={currentEmployment}
                onClick={onChangeCurrentEmployment}
                className="mr-2"
                tabIndex={5}
                aria-live="assertive"
                id="current-employment-radio"
              />
              É meu emprego atual
            </Label>
            <div className="flex justify-end gap-2 mt-5">
              {(!!index || index === 0) && form.formState.isDirty && (
                <Button
                  type="submit"
                  aria-label="Salvar alterações"
                  tabIndex={6}
                  aria-disabled={form.formState.isSubmitting ? "true" : "false"}
                >
                  Salvar
                </Button>
              )}
              {!index && index !== 0 && (
                <Button type="submit" aria-label="Adicionar experiência" tabIndex={7}>
                  Adicionar
                </Button>
              )}
              {(index || index === 0) && (
                <Button
                  onClick={() => removeItemList(index)}
                  aria-label="Remover experiência"
                  tabIndex={8}
                  role="button"
                  aria-pressed="false"
                >
                  Remover
                </Button>
              )}
            </div>
          </div>
        </form>
      </Form>
    </Card>
  );
}