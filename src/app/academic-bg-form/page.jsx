"use client";

import { useState } from "react";
import DynamicList from "@/components/custom/dynamicList";
import useSWRMutation from "swr/mutation";
import { Button } from "@/components/ui/button";
import { sendRequest } from "@/lib/sendRequest";
import { toast } from "sonner";
import useSWR from "swr";
import { fetcher } from "@/lib/fetcher";
import AcademicFormItem from "./_components/AcademicFormItem";

export default function AcademicBgForm() {
  const [academicList, setAcademicList] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  const [newItem, setNewItem] = useState(false);

  useSWR("/academic", fetcher, {
    onSuccess({ info }) {
      setAcademicList([...info]);
      setIsEdit(true);
    },
    onError() {
      setIsEdit(false);
    }
  });
  const { trigger } = useSWRMutation("/academic", sendRequest);

  const addItemInList = (item) => {
    setAcademicList((prev) => [...prev, item]);
    setNewItem(false);
  };

  const removeItemList = (index) => {
    setAcademicList((prev) => [
      ...prev.slice(0, index),
      ...prev.slice(index + 1)
    ]);
  };

  const updateItemList = (item, index) => {
    setAcademicList((prev) => [
      ...prev.slice(0, index),
      item,
      ...prev.slice(index + 1)
    ]);
  };

  const onSubmit = async () => {
    try {
      await trigger({
        data: academicList,
        method: isEdit ? "PUT" : "POST"
      });
      toast.success("Suas informações acadêmica foram registradas com sucesso");
    } catch {
      toast.error(
        "Ocorreu um erro no envio do formulário de informações acadêmica"
      );
    }
  };

  return (
    <div className="flex flex-col items-center w-[80%] mx-auto p-5">
      <h1 className="text-center">Formulário de Dados Acadêmicos</h1>
      <DynamicList
        addItemInList={addItemInList}
        updateItemList={updateItemList}
        removeItemList={removeItemList}
        propertyKey="company"
        addLabel="Adicionar nova formação acadêmica"
        list={academicList}
        newItem={newItem}
        setNewItem={setNewItem}
      >
        <AcademicFormItem />
      </DynamicList>
      <div className="mt-5 w-full flex justify-center">
        <Button className="mb-10" onClick={onSubmit}>
          {isEdit ? "Salvar Alterações" : "Registrar"}
        </Button>
      </div>
    </div>
  );
}
