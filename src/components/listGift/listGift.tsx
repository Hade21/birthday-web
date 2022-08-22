import React from "react";
import Button from "../button/button";
import Checkbox from "../checkbox/checkbox";
import { motion } from "framer-motion";

interface ListGiftProps {
  onClick: () => void;
  value: string[];
  onSelect: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
const ListGift: React.FC<ListGiftProps> = ({ onClick, value, onSelect }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex h-screen w-screen items-center justify-center bg-slate-900 bg-opacity-70"
    >
      <ul className="flex w-5/6 flex-col gap-2 rounded-md bg-white p-4 lg:w-1/2">
        <h3 className="mb-4 font-rubik text-xl font-semibold text-slate-500 lg:text-2xl">
          Pilih 8 Hadiah yang kamu inginkan
        </h3>
        {value.map((item, index) => {
          return (
            <li key={index}>
              <Checkbox id={item} name="item" onChange={onSelect}>
                {item}
              </Checkbox>
            </li>
          );
        })}

        <li className="mt-4 w-fit self-center">
          <Button type="button" onClick={onClick}>
            Submit
          </Button>
        </li>
      </ul>
    </motion.div>
  );
};

export default ListGift;
