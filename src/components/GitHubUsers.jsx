import { useState } from "react";
import ReturnButton from "./ReturnButton";
import { clients } from "../data/data";

export default function GitHubUsers() {
  const [client, setClient] = useState(clients);

  const removeItem = (id) => {
    setClient((oldValue) => oldValue.filter((el) => el.id !== id));
  };

  const removeAll = () => {
    setClient([]);
  };

  const reloadAll = () => {
    setClient(clients);
  };

  const buttonStyle = {
    backgroundColor: "#F8F005",
    padding: "10px",
    borderRadius: "10px",
    margin: "10px",
    fontWeight: "bold",
  };

  return (
    <div className="bg-neutral-800 w-full h-screen justify-center items-center overflow-y-auto p-6 py-0">
      <h1 className="text-5xl asher-punk font-extrabold text-center uppercase text-white my-6"
      style={{ color: "#bd00ff" }}>
        Meeting
      </h1>
      {client.map((el) => (
        <div
          key={el.id}
          className="bg-white text-black rounded-md p-2 m-2 flex justify-center"
        >
          <img
            style={{
              width: "100px",
              borderRadius: "50px",
              marginRight: "20px",
            }}
            src={el.img}
            alt={el.name}
          />
          <div className="flex flex-col justify-center">
            <h4>{el.name}</h4>
            <p>{el.desc}</p>
          </div>
          <button
            style={{
              marginLeft: "auto",
              padding: "15px",
              borderRadius: "10px",
              fontSize: "24px",
              fontWeight: "bold",
              color: "darkred",
            }}
            onClick={() => removeItem(el.id)}
          >
            X
          </button>
        </div>
      ))}
      <div className="flex justify-center items-center">
        <button style={buttonStyle} onClick={removeAll}>
          Delete All
        </button>
        <button style={buttonStyle} onClick={reloadAll}>
          Reload All
        </button>
      </div>
      <div className="text-center">
        <ReturnButton />
      </div>
    </div>
  );
}

