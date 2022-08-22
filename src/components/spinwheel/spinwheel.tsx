import React from "react";
import Arrow from "../../assets/arrow-left-long-solid.svg";
import ModalGift from "../modalGift/modalgift";

interface SpinWheelProps {
  data: string[];
  name: string;
}
const SpinWheel: React.FC<SpinWheelProps> = ({ data, name }) => {
  const [spin, setSpin] = React.useState(false);
  const [selectedItem, setSelecteItem] = React.useState("");
  const [showModal, setShowModal] = React.useState(false);

  const shuffleArray = (array: any[]) => {
    let currentIndex: number = array.length;
    let randomIndex;

    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
      return array;
    }
  };
  const spinning = () => {
    let selectedItem = "";

    let gift1: any = shuffleArray([1890, 2250, 2610]);
    let gift2: any = shuffleArray([1850, 2210, 2570]);
    let gift3: any = shuffleArray([1770, 2130, 2490]);
    let gift4: any = shuffleArray([1810, 2170, 2530]);
    let gift5: any = shuffleArray([1750, 2110, 2470]);
    let gift6: any = shuffleArray([1630, 1990, 2350]);
    let gift7: any = shuffleArray([1570, 1930, 2290]);
    let gift8: any = shuffleArray([1510, 1870, 2230]);

    let result: any = shuffleArray([
      gift1[0],
      gift2[0],
      gift3[0],
      gift4[0],
      gift5[0],
      gift6[0],
      gift7[0],
      gift8[0],
    ]);

    if (gift1?.includes(result[0])) selectedItem = data[0];
    if (gift2?.includes(result[0])) selectedItem = data[1];
    if (gift3?.includes(result[0])) selectedItem = data[2];
    if (gift4?.includes(result[0])) selectedItem = data[3];
    if (gift5?.includes(result[0])) selectedItem = data[4];
    if (gift6?.includes(result[0])) selectedItem = data[5];
    if (gift7?.includes(result[0])) selectedItem = data[6];
    if (gift8?.includes(result[0])) selectedItem = data[7];
    return setSelecteItem(selectedItem);
  };

  const handleSpin = () => {
    setSpin(true);
    spinning();
    setTimeout(() => {
      setSpin(false);
      setShowModal(true);
    }, 1000);
  };

  console.log(data);
  return (
    <>
      <div className="flex h-screen w-screen items-center justify-center bg-slate-900 bg-opacity-70">
        <div className="mainbox relative h-[500px] w-[500px]" id="mainbox">
          <div
            className={`box relative h-full w-full rotate-90 ${
              spin ? "animate-spin" : null
            } overflow-hidden rounded-full border-8 border-slate-400 text-center text-white transition-all duration-300 ease-out`}
            id="box"
          >
            <div className="box1">
              <span
                className="span1 absolute inline-block h-full w-full bg-green-500"
                style={{ clipPath: "polygon(50% 0, 0 50%, 50% 50%)" }}
              >
                <h5 className="absolute top-[38%] right-[60%] rotate-[160deg]">
                  {data[0]}
                </h5>
              </span>
              <span
                className="span2 absolute inline-block h-full w-full bg-red-500"
                style={{ clipPath: "polygon(0 0, 0 50%, 50% 0)" }}
              >
                <h5 className="absolute top-[20%] right-[80%] rotate-[110deg]">
                  {data[1]}
                </h5>
              </span>
              <span
                className="span3 absolute inline-block h-full w-full bg-blue-500"
                style={{ clipPath: "polygon(100% 50%, 0 50%, 50% 100%)" }}
              >
                <h5 className="absolute top-[60%] right-[60%] rotate-[200deg]">
                  {data[2]}
                </h5>
              </span>
              <span
                className="span4 absolute inline-block h-full w-full bg-orange-500"
                style={{ clipPath: "polygon(0 50%, 50% 100%, 0 100%)" }}
              >
                <h5 className="absolute top-[80%] right-[80%] rotate-[-120deg]">
                  {data[3]}
                </h5>
              </span>
            </div>
            <div className="box2 h-full w-full rotate-180">
              <span
                className="span1 absolute inline-block h-full w-full bg-slate-500"
                style={{ clipPath: "polygon(50% 0, 0 50%, 50% 50%)" }}
              >
                <h5 className="absolute top-[35%] right-[60%] rotate-[160deg]">
                  {data[4]}
                </h5>
              </span>
              <span
                className="span2 absolute inline-block h-full w-full bg-purple-500"
                style={{ clipPath: "polygon(0 0, 0 50%, 50% 0)" }}
              >
                <h5 className="absolute top-[20%] right-[80%] rotate-[110deg]">
                  {data[5]}
                </h5>
              </span>
              <span
                className="span3 absolute inline-block h-full w-full bg-pink-500"
                style={{ clipPath: "polygon(100% 50%, 0 50%, 50% 100%)" }}
              >
                <h5 className="absolute top-[60%] right-[60%] rotate-[200deg]">
                  {data[6]}
                </h5>
              </span>
              <span
                className="span4 absolute inline-block h-full w-full bg-violet-500"
                style={{ clipPath: "polygon(0 50%, 50% 100%, 0 100%)" }}
              >
                <h5 className="absolute top-[80%] right-[80%] rotate-[-120deg]">
                  {data[7]}
                </h5>
              </span>
            </div>
          </div>
          <button
            className="absolute top-1/2 left-1/2 h-[75px] w-[75px] -translate-x-1/2 -translate-y-1/2 rounded-full border-4 border-slate-300 bg-sky-500 font-bold text-white active:h-[70px] active:w-[70px]"
            onClick={handleSpin}
          >
            SPIN
          </button>
          <img
            src={Arrow}
            alt="arrow"
            className="absolute top-1/2 -right-5 w-12 -translate-y-1/2"
          />
        </div>
      </div>
      {showModal && <ModalGift name={name} prize={selectedItem} />}
    </>
  );
};

export default SpinWheel;
