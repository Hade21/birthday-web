import React from "react";
import Button from "../button/button";
import Input from "../input/input";
import { motion } from "framer-motion";

interface NameModalProps {
  onName: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  value: string;
}
const NameModal: React.FC<NameModalProps> = ({ onName, value, onSubmit }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed flex h-screen w-screen items-center justify-center bg-slate-900 bg-opacity-70"
    >
      <form
        className="flex h-fit w-5/6 flex-col justify-center gap-4 rounded-md border border-slate-200 bg-white p-4 font-rubik lg:h-1/3 lg:w-1/3"
        onSubmit={onSubmit}
      >
        <div className="form-group px-4">
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
    </motion.div>
  );
};

export default NameModal;
