import { useState, useEffect } from "react";
import ReturnButton from "./ReturnButton";

export default function DigitalClock() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const timerID = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(timerID);
  }, []);

  return (
    <div className="bg-neutral-800 w-full h-screen overflow-hidden flex flex-col justify-center items-center">
      <h1 style={{ color: '#bd00ff' }} className="text-5xl asher-punk font-extrabold uppercase text-white">Digital Clock</h1>
      <div
        style={{
          border: 'solid 2px #001eff',
          borderRadius: '25px',
        }}
        className="text-4xl text-white m-6 p-6 rounded-lg"
      >
        <h1>{time}</h1>
      </div>
      <ReturnButton />
    </div>
  );
}