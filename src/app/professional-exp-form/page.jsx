"use client";

import { useState } from "react";
import ProfessionalFormItem from "./_components/professionalFormItem";
import DynamicList from "@/components/custom/dynamicList";

export default function ProfessionalExpForm() {
  const [professionalList, setProfessionalList] = useState([]);
  const [newItem, setNewItem] = useState(false);

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
    </div>
  );
}
