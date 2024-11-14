"use client";

import { useState } from "react";
import ProfessionalFormItem from "./_components/professionalFormItem";
import DynamicList from "@/components/custom/dynamicList";
import useSWRMutation from "swr/mutation";
import { Button } from "@/components/ui/button";
import { sendRequest } from "@/lib/sendRequest";
import { useRouter } from 'next/navigation';
import { Routes } from "@/constants/routes";
import { toast } from "sonner";
import useSWR from "swr";
import { fetcher } from "@/lib/fetcher";

export default function ProfessionalExpForm() {
  const [professionalList, setProfessionalList] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  const [newItem, setNewItem] = useState(false);
  const router = useRouter();

  const { isLoading } = useSWR("/professional", fetcher, {
    onSuccess({ info }) {
      setProfessionalList([...info]);
      setIsEdit(true);
    },
    onError() {
      setIsEdit(false);
    }
  });
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
      await trigger({
        data: professionalList,
        method: isEdit ? "PUT" : "POST"
      });
      toast.success(
        "Suas expriências profissionais foram registradas com sucesso"
      );
      router.push(Routes.DASHBOARD);
    } catch {
      toast.error(
        "Ocorreu um erro no envio do formulário de experiência profissional"
      );
    }
  };

  return (
    <div
      className="flex flex-col items-center w-[80%] mx-auto p-5"
      role="region"
      aria-labelledby="form-header"
      tabIndex={0}
    >
      <h1 id="form-header" className="text-center sr-only" tabIndex={0}>
        Formulário de Experiências Profissionais
      </h1>

      <DynamicList
        addItemInList={addItemInList}
        updateItemList={updateItemList}
        removeItemList={removeItemList}
        propertyKey="company"
        addLabel="Adicionar nova experiência profissional"
        list={professionalList}
        newItem={newItem}
        setNewItem={setNewItem}
        aria-label="Lista dinâmica de experiências profissionais"
        tabIndex={0}
        aria-live="polite"
      >
        <ProfessionalFormItem
          aria-label="Formulário para adicionar experiência profissional"
          tabIndex={0}
        />
      </DynamicList>

      <div className="mt-5 w-full flex justify-center">
        <Button
          className="mb-10"
          onClick={onSubmit}
          aria-label={
            isEdit
              ? "Salvar Alterações nas Experiências Profissionais"
              : "Registrar Experiências Profissionais"
          }
          tabIndex={0}
        >
          {isEdit ? "Salvar Alterações" : "Registrar"}
        </Button>
      </div>
    </div>
  );
}