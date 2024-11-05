"use client";

import { cloneElement } from "react";
import { Button } from "@/components/ui/button";

export default function DynamicList({
  list,
  propertyKey,
  children,
  updateItemList,
  addItemInList,
  removeItemList,
  addLabel,
  newItem,
  setNewItem
}) {
  return (
    <>
      {list.map((item, index) =>
        cloneElement(children, {
          key: `${item[propertyKey]}-${index}`,
          item,
          addItemInList: updateItemList,
          index,
          removeItemList
        })
      )}
      {newItem && cloneElement(children, { addItemInList })}
      <div className=" flex justify-center p-5 w-full">
        {!newItem && (
          <Button onClick={() => setNewItem(true)}>{addLabel}</Button>
        )}
      </div>
    </>
  );
}
