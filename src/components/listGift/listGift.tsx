import React from "react";
import Button from "../button/button";
import Checkbox from "../checkbox/checkbox";

interface ListGiftProps {
  onClick: () => void;
  value: string[];
  onSelect: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
const ListGift: React.FC<ListGiftProps> = ({ onClick, value, onSelect }) => {
  return (
    <div className="flex h-screen w-screen items-center justify-center bg-slate-900 bg-opacity-70">
      <ul className="flex w-1/2 flex-col gap-2 rounded-md bg-white p-4">
        <h3 className="mb-4 font-rubik text-2xl font-semibold text-slate-500">
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
    </div>
  );
};

export default ListGift;
