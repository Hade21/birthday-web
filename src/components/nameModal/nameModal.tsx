import React from "react";
import Button from "../button/button";
import Input from "../input/input";

interface NameModalProps {
  onName: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  value: string;
}
const NameModal: React.FC<NameModalProps> = ({ onName, value, onSubmit }) => {
  return (
    <div className="fixed flex h-screen w-screen items-center justify-center bg-slate-900 bg-opacity-70">
      <form
        className="flex h-1/3 w-1/3 flex-col justify-center gap-4 rounded-md border border-slate-200 bg-white p-4 font-rubik"
        onSubmit={onSubmit}
      >
        <div className="form-group">
          <Input
            id="name"
            type="text"
            label="Halo, dengan siapa disini?"
            value={value}
            onChange={onName}
          />
        </div>
        <div className="form-group">
          <Button type="submit">Simpan</Button>
        </div>
      </form>
    </div>
  );
};

export default NameModal;
