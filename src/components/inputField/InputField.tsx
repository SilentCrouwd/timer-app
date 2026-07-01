import type React from "react";
import "./InputField.css";

interface inputProps {
  inputValue: number | string | undefined;
  inputName: string | undefined;
  inputOnchange: React.ChangeEventHandler<HTMLInputElement>;
  inputPlaceholder: string | undefined;
  inputType: string;
}

function InputField({
  inputValue,
  inputName,
  inputOnchange,
  inputPlaceholder,
  inputType,
}: inputProps) {
  return (
    <input
      value={inputValue}
      className={inputName}
      onChange={inputOnchange}
      placeholder={inputPlaceholder}
      type={inputType}
    />
  );
}

export default InputField;
