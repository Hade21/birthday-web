import React, { useEffect } from "react";
import Button from "../button/button";

interface IProps {
  name: string;
  date: string;
  onClick: () => void;
}
const BirthdayCard: React.FC<IProps> = ({ name, date, onClick }) => {
  const [showButton, setShowButton] = React.useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowButton(true);
    }, 2000);
  }, []);

  return (
    <>
      <div className=" mx-auto flex h-screen w-screen flex-col items-center justify-center gap-8">
        <h1 className="font-rubik text-3xl font-normal text-slate-600">
          Hello{" "}
          <span className="font-lovers-quarrel text-6xl font-bold">{name}</span>{" "}
          <br /> We Wish You <br />
          <span className="font-lovers-quarrel text-6xl font-bold">
            Happy Birthday On {date.split("-").reverse().join("-")}
          </span>
        </h1>
        {showButton && (
          <Button type="button" onClick={onClick}>
            Pilih Hadiahmu
          </Button>
        )}
      </div>
    </>
  );
};

export default BirthdayCard;
