import { useState } from "react";
import ReturnButton from "./ReturnButton";

export default function BgChange() {
  const colors = [
    "red",
    "black",
    "white",
    "green",
    "orange",
    "blue",
    "yellow",
    "pink",
    "purple",
    "cyan",
    "lightblue",
  ];
  const [color, setColor] = useState("white");

  const changeColor = () => {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    setColor(randomColor);
  };

  return (
    <div className="bg-neutral-800 w-full h-screen overflow-hidden flex flex-col justify-center items-center">
      <h1
        style={{ color: "#bd00ff" }}
        className="text-5xl asher-punk font-extrabold text-center uppercase text-white my-6"
      >
        Background Change
      </h1>
      <div
        style={{
          backgroundColor: color,
          padding: "100px",
        }}
      />
      <button
        style={{
          backgroundColor: "#F8F005",
          padding: "10px",
          borderRadius: "10px",
          margin: "10px",
          fontWeight: "bold",
        }}
        onClick={changeColor}
      >
        Change color
      </button>
      <ReturnButton />
    </div>
  );
}