"use client";

import { useState } from "react";
import ProfessionalFormItem from "./_components/professionalFormItem";
import DynamicList from "@/components/custom/dynamicList";
import useSWRMutation from "swr/mutation";
import { Button } from "@/components/ui/button";
import { sendRequest } from "@/lib/sendRequest";
import { toast } from "sonner";

export default function ProfessionalExpForm() {
  const [professionalList, setProfessionalList] = useState([]);
  const [newItem, setNewItem] = useState(false);

  const { trigger } = useSWRMutation("/professional", sendRequest);

  const addItemInList = (item) => {
    setProfessionalList((prev) => [...prev, item]);
    setNewItem(false);
  };

  const removeItemList = (index) => {
    setProfessionalList((prev) => [
      ...prev.slice(0, index),
      ...prev.slice(index + 1)
    ]);
  };

  const updateItemList = (item, index) => {
    setProfessionalList((prev) => [
      ...prev.slice(0, index),
      item,
      ...prev.slice(index + 1)
    ]);
  };

  const onSubmit = async () => {
    try {
      await trigger(professionalList);
      toast.success(
        "Suas expriências profissionais foram registradas com sucesso"
      );
    } catch {
      toast.error(
        "Ocorreu um erro no envio do formulário de experiência profissional"
      );
    }
  };

  return (
    <div className="flex flex-col items-center w-[80%] mx-auto p-5">
      <h1>Formulário experiência profissional</h1>
      <DynamicList
        addItemInList={addItemInList}
        updateItemList={updateItemList}
        removeItemList={removeItemList}
        propertyKey="company"
        addLabel="Adicionar nova experiência profissional"
        list={professionalList}
        newItem={newItem}
        setNewItem={setNewItem}
      >
        <ProfessionalFormItem />
      </DynamicList>
      <Button className="fixed right-10 bottom-10" onClick={onSubmit}>
        Registrar
      </Button>
    </div>
  );
}
