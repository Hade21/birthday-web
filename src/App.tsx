import React, { useEffect } from "react";
import "./App.css";
import {
  BirthdayCard,
  Confetti,
  DateModal,
  ListGift,
  NameModal,
  SpinWheel,
} from "./components";

function App() {
  const audioRef = React.useRef<HTMLAudioElement>(null);
  const list: string[] = [
    "Iphone 13 Pro Max",
    "Samsung S22",
    "Honda Beat",
    "Macbook Pro",
    "Ipad Pro",
    "Honda Jazz",
    "1 Unit Rumah",
    "Rp 1000000",
    "Rp 5000000",
    "Rp 10000000",
  ];
  let data: string[] = [];
  const [name, setName] = React.useState("");
  const [date, setDate] = React.useState("");
  const [spinItems, setSpinItems] = React.useState([""]);
  const [showNameModal, setShowNameModal] = React.useState(true);
  const [showDateModal, setShowDateModal] = React.useState(true);
  const [showConfetti, setShowConfetti] = React.useState(false);
  const [showListGift, setShowListGift] = React.useState(false);
  const [showSpinner, setShowSpinner] = React.useState(false);

  const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  const handleDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDate(e.target.value);
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (name && showNameModal) {
      setShowNameModal(false);
    } else if (date && showDateModal) {
      setShowDateModal(false);
    }
  };
  const handleChooseGift = () => {
    setShowConfetti(false);
    setShowListGift(true);
  };
  const handleSubmitGift = () => {
    console.log(data);
    if (data?.length === 8) {
      setSpinItems(data);
      setShowListGift(false);
      setShowSpinner(true);
    } else {
      alert("Pilih 8 buah hadiah");
    }
  };
  const handleSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (data && data.includes(e.target.id)) {
      data = data.filter((item) => item !== e.target.id);
    } else if (data && !data.includes(e.target.id)) {
      data.push(e.target.id);
    }
    console.log(data);
  };

  useEffect(() => {
    const getBirthday = (): boolean => {
      const today = `${("0" + String(new Date().getMonth() + 1)).slice(-2)}-${(
        "0" + String(new Date().getDate())
      ).slice(-2)}`;
      const birthday = `${String(date.split("-")[1])}-${String(
        date.split("-")[2]
      )}`;
      console.log(today, birthday);
      return today === birthday;
    };
    if (!showDateModal && getBirthday()) {
      setShowConfetti(true);
      setTimeout(() => {
        audioRef?.current?.play();
      }, 500);
    } else {
      setShowConfetti(false);
    }
  }, [date, showDateModal]);

  return (
    <div className="App bg-pattern bg-auto">
      {showNameModal && (
        <NameModal onName={handleName} value={name} onSubmit={handleSubmit} />
      )}
      {!showNameModal && showDateModal && (
        <DateModal onDate={handleDate} value={date} onSubmit={handleSubmit} />
      )}
      {!showNameModal && !showDateModal && showConfetti && <Confetti />}
      <audio
        ref={audioRef}
        src="https://wishesplus.com/wp-content/uploads/2021/02/Happy-Birthday-To-You-Happy-Birthday-Songs-2021-WishesPlus.com_.mp3"
        id="audio"
      ></audio>
      {!showNameModal && !showDateModal && showConfetti && (
        <BirthdayCard name={name} date={date} onClick={handleChooseGift} />
      )}
      {showListGift && (
        <ListGift
          onClick={handleSubmitGift}
          value={list}
          onSelect={handleSelect}
        />
      )}
      {showSpinner && <SpinWheel data={spinItems} name={name} />}
    </div>
  );
}

export default App;
