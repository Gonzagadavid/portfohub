"use client";

import { useState } from "react";
import DynamicList from "@/components/custom/dynamicList";
import useSWRMutation from "swr/mutation";
import { Button } from "@/components/ui/button";
import { sendRequest } from "@/lib/sendRequest";
import { useRouter } from 'next/navigation';
import { Routes } from "@/constants/routes";
import { toast } from "sonner";
import useSWR from "swr";
import { fetcher } from "@/lib/fetcher";
import ProjectFormItem from "./_components/ProjectFormItem";

export default function ProjectsForm() {
  const [projectList, setProjectList] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  const [newItem, setNewItem] = useState(false);
  const router = useRouter();

  useSWR("/projects", fetcher, {
    onSuccess({ info }) {
      setProjectList([...info]);
      setIsEdit(true);
    },
    onError() {
      setIsEdit(false);
    }
  });
  const { trigger } = useSWRMutation("/projects", sendRequest);

  const addItemInList = (item) => {
    setProjectList((prev) => [...prev, item]);
    setNewItem(false);
  };

  const removeItemList = (index) => {
    setProjectList((prev) => [
      ...prev.slice(0, index),
      ...prev.slice(index + 1)
    ]);
  };

  const updateItemList = (item, index) => {
    setProjectList((prev) => [
      ...prev.slice(0, index),
      item,
      ...prev.slice(index + 1)
    ]);
  };

  const onSubmit = async () => {
    try {
      await trigger({
        data: projectList,
        method: isEdit ? "PUT" : "POST"
      });
      toast.success("Seus projetos foram registradas com sucesso");
      router.push(Routes.DASHBOARD);
    } catch {
      toast.error("Ocorreu um erro no envio do formulário de projeto");
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
        Formulário de Projetos
      </h1>

      <DynamicList
        addItemInList={addItemInList}
        updateItemList={updateItemList}
        removeItemList={removeItemList}
        propertyKey="company"
        addLabel="Adicionar novo projeto"
        list={projectList}
        newItem={newItem}
        setNewItem={setNewItem}
        aria-label="Lista dinâmica de projetos"
        tabIndex={0}
      >
        <ProjectFormItem />
      </DynamicList>

      <div className="mt-5 w-full flex justify-center">
        <Button
          className="mb-10"
          onClick={onSubmit}
          aria-label={isEdit ? "Salvar Alterações nos Projetos" : "Registrar Projetos"}
          tabIndex={0}
        >
          {isEdit ? "Salvar Alterações" : "Registrar"}
        </Button>
      </div>
    </div>
  );
}