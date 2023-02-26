import { useState } from "react";
import ReturnButton from "./ReturnButton";

export default function Counter() {
  const [counter, setCounter] = useState(0);

  const handleClick = (amount) => {
    setCounter((prevCounter) => prevCounter + amount);
  };

  return (
    <>
      <div className="bg-neutral-800 w-full h-screen overflow-hidden flex flex-col justify-center items-center">
        <h1
          style={{ color: "#bd00ff" }}
          className="text-5xl asher-punk font-extrabold uppercase text-white"
        >
          Counter
        </h1>
        <div className="flex justify-between my-12">
          <button
            style={{
              backgroundColor: "#F8F005",
              padding: "10px",
              borderRadius: "10px",
              margin: "10px",
              fontSize: '36px',
              width: '50px'
            }}
            onClick={() => handleClick(-1)}
          >
            -
          </button>
          <h4 className="text-4xl text-white m-6 p-6 text-center">{counter}</h4>
          <button
            style={{
              backgroundColor: "#F8F005",
              padding: "10px",
              borderRadius: "10px",
              margin: "10px",
              fontSize: '36px',
              width: '50px'
            }}
            onClick={() => handleClick(1)}
          >
            +
          </button>
        </div>
        <ReturnButton />
      </div>
    </>
  );
}