"use client";

import { useState } from "react";
import DynamicList from "@/components/custom/dynamicList";
import useSWRMutation from "swr/mutation";
import { Button } from "@/components/ui/button";
import { sendRequest } from "@/lib/sendRequest";
import { toast } from "sonner";
import useSWR from "swr";
import { fetcher } from "@/lib/fetcher";
import ProjectFormItem from "./_components/ProjectFormItem";

export default function ProjectsForm() {
  const [projectList, setProjectList] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  const [newItem, setNewItem] = useState(false);

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
    } catch {
      toast.error("Ocorreu um erro no envio do formulário de projeto");
    }
  };

  return (
    <div className="flex flex-col items-center w-[80%] mx-auto p-5">
      <h1 className="text-center">Formulário de Projetos</h1>
      <DynamicList
        addItemInList={addItemInList}
        updateItemList={updateItemList}
        removeItemList={removeItemList}
        propertyKey="company"
        addLabel="Adicionar novo projeto"
        list={projectList}
        newItem={newItem}
        setNewItem={setNewItem}
      >
        <ProjectFormItem />
      </DynamicList>
      <div className="mt-5 w-full flex justify-center">
        <Button className="mb-10" onClick={onSubmit}>
          {isEdit ? "Salvar Alterações" : "Registrar"}
        </Button>
      </div>
    </div>
  );
}
