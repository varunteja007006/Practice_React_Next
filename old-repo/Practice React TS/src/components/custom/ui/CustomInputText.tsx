import { FormEventHandler, memo } from "react";

interface PropsType {
  type: "text" | "number" | "email" | "password" | string;
  placeholder?: string;
  className?: string;
  name: string;
  value?: string;
  label: string;
  handleFunction?: FormEventHandler;
  disabled?: boolean;
}

function CustomInputText({
  type,
  placeholder,
  className,
  name,
  value,
  label,
  handleFunction,
  disabled = false,
}: PropsType) {
  return (
    <label className="form-control w-full max-w-xs">
      <div className="label">
        <span className="label-text text-black dark:text-white">{label}</span>
      </div>
      <input
        type={type}
        placeholder={placeholder ?? "Enter here..."}
        className={`input input-bordered w-full max-w-xs ${className ?? ""}`}
        name={name}
        value={value ?? ""}
        onChange={handleFunction}
        disabled={disabled}
      />
    </label>
  );
}

export default memo(CustomInputText);
