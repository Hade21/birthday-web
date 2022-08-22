import React from "react";

interface InputProps {
  label: string;
  id: string;
  type: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
}
const Input: React.FC<InputProps> = ({ label, id, type, onChange, value }) => {
  return (
    <div className="flex w-full flex-col gap-2">
      <label htmlFor={id} className="text-left text-base text-slate-700">
        {label}
      </label>
      <input
        type={type}
        id={id}
        name={id}
        className="rounded-md border border-sky-500 bg-transparent px-4 py-2 text-lg font-medium text-slate-800 focus:ring-1 focus:ring-blue-500"
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
