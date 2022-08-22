import React from "react";

interface ModalGiftProps {
  name: string;
  prize: string;
}
const ModalGift: React.FC<ModalGiftProps> = ({ name, prize }) => {
  return (
    <div className="fixed top-0 left-0 flex h-screen w-screen items-center justify-center bg-slate-900 bg-opacity-70">
      <div className="wrapper rounded-md border border-slate-300 bg-white p-8">
        <h1 className="font-rubik text-3xl font-medium text-slate-800">
          Congrats <span className="font-lovers-quarrel text-5xl">{name}</span>{" "}
          You Got <span className="font-bold">{prize ? prize : "Zonk"}</span>{" "}
          from Us
        </h1>
      </div>
    </div>
  );
};

export default ModalGift;
