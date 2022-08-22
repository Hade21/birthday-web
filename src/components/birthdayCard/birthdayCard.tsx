import React, { useEffect } from "react";
import Button from "../button/button";
import { motion } from "framer-motion";

interface IProps {
  name: string;
  date: string;
  age: number;
  onClick: () => void;
}
const BirthdayCard: React.FC<IProps> = ({ name, date, age, onClick }) => {
  const [showButton, setShowButton] = React.useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowButton(true);
    }, 2000);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className=" mx-auto flex h-screen w-screen flex-col items-center justify-center gap-8">
        <h1 className="w-11/12 rounded-md bg-white bg-opacity-50 px-4 py-4 font-rubik text-xl font-normal text-slate-800 shadow-xl backdrop-blur-sm transition-all duration-200 lg:text-3xl">
          Hello{" "}
          <span className="font-lovers-quarrel text-5xl font-bold lg:text-6xl">
            {name}
          </span>{" "}
          <br /> We Wish You <br />
          <span className="font-lovers-quarrel text-5xl font-extrabold lg:text-6xl">
            Happy Birthday On {date.split("-").reverse().join("-")}
          </span>
          {"  "}
          for{"  "}
          <span className="font-lovers-quarrel text-5xl font-extrabold lg:text-6xl">
            {age}
          </span>
          {"  "}
          Years Old
        </h1>
        {showButton && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Button type="button" onClick={onClick}>
              Pilih Hadiahmu
            </Button>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default BirthdayCard;
