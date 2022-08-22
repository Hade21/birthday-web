import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type: "button" | "submit" | "reset";
}
const Button: React.FC<ButtonProps> = ({ children, onClick, type }) => {
  return (
    <button
      className="rounded-full bg-sky-500 px-6 py-2 text-white shadow-lg transition duration-200 ease-in hover:bg-sky-400 active:translate-y-1 active:shadow-none"
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
