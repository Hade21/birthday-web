import React from "react";
import confetti from "canvas-confetti";

interface IDefault {
  startVelocity: number;
  spread: number;
  ticks: number;
  zIndex: number;
}
const Confetti = () => {
  const duration: number = 15 * 1000;
  const animationEnd: number = Date.now() + duration;
  const defaults: IDefault = {
    startVelocity: 30,
    spread: 360,
    ticks: 60,
    zIndex: 0,
  };

  const randomInRange = (min: number, max: number) => {
    return Math.random() * (max - min) + min;
  };

  const interval = setInterval((): void => {
    const timeleft = animationEnd - Date.now();

    if (timeleft <= 0) {
      return clearInterval(interval);
    }
    const particlecount = 50 * (timeleft / duration);

    confetti(
      Object.assign({}, defaults, {
        particlecount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
      })
    );
    confetti(
      Object.assign({}, defaults, {
        particlecount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
      })
    );
  }, 250);

  return <div></div>;
};

export default Confetti;
