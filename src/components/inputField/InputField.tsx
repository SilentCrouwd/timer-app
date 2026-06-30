import type React from "react";
import "./InputField.css";
import { useState } from "react";

interface inputProps {
  inputName: string | undefined;
  inputOnchange: React.ChangeEventHandler<HTMLInputElement>;
  inputPlaceholder: string | undefined;
  inputType: string;
}

function InputField({
  inputName,
  inputOnchange,
  inputPlaceholder,
  inputType,
}: inputProps) {
  return (
    <input
      className={inputName}
      onChange={inputOnchange}
      placeholder={inputPlaceholder}
      type={inputType}
    />
  );
}

export default InputField;
