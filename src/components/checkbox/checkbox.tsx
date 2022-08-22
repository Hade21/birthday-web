import React from "react";

interface CheckboxProps {
  children: React.ReactNode;
  id: string;
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
const Checkbox: React.FC<CheckboxProps> = ({
  children,
  id,
  name,
  onChange,
}) => {
  return (
    <div className="mx-auto flex w-5/6 items-center justify-between rounded-md border-2 bg-slate-200 px-3 py-1 outline-none ring-slate-800">
      <label
        htmlFor={id}
        className="w-full text-left font-rubik text-base text-slate-800 lg:text-lg"
      >
        {children}
      </label>
      <input
        type="checkbox"
        name={name}
        id={id}
        className="h-4 w-4 text-slate-800"
        onChange={onChange}
      />
    </div>
  );
};

export default Checkbox;
