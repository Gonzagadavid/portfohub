import React from "react";
import { Controller } from "react-hook-form";
import { FormLabel, FormMessage } from "../ui/form";
import { Input } from "../ui/input";

const AddressInputField = ({ label, name, control }) => {
  const renderInputField = (fieldName, placeholder) => (
    <Controller
      name={`${name}.${fieldName}`} // Acesso dinâmico aos campos
      control={control}
      render={({ field, fieldState }) => (
        <div className="flex-1">
          <Input
            id={fieldName}
            placeholder={placeholder}
            {...field}
            className="text-sm" // Adiciona classe para uniformidade
          />
          {fieldState.error && (
            <FormMessage>{fieldState.error.message}</FormMessage>
          )}
        </div>
      )}
    />
  );

  return (
    <div>
      <FormLabel htmlFor={name}>{label}</FormLabel>
      <div className="flex justify-between space-x-4">
        {renderInputField('city', 'Cidade')}
        {renderInputField('state', 'Estado')}
      </div>
    </div>
  );
};

export default AddressInputField;
