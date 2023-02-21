import ReturnButton from "./ReturnButton";
import { clients } from "../data/data";
import { useState } from "react";

export default function Meeting() {
  const [client, setClient] = useState(clients);

  const removeItem = (id) => {
    setClient((oldValue) => oldValue.filter((el) => el.id !== id));
  };

  const removeAll = () => {
    setClient([]);
  };

  const reloadAll = () => {
    setClient(clients);
  }

  return (
    <>
      <h1>Meeting</h1>
      {client.map((el) => (
        <div
          key={el.id}
          style={{
            backgroundColor: "white",
            color: "black",
            border: "2px solid black",
            borderRadius: "25px",
            padding: "10px",
            margin: "10px",
            width: "80%",
            display: "flex",
            alignItems: "center",
          }}
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
          <div style={{ display: "flex", flexDirection: "column" }}>
            <h4 style={{ textAlign: "center" }}>{el.name}</h4>
            <p style={{ textAlign: "center", fontSize: "14px" }}>{el.desc}</p>
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
      <div style={{ display: "flex" }}>
        <button style={{ marginRight: "10px" }} onClick={removeAll}>
          Delete All
        </button>
        <button onClick={reloadAll}>Reload All</button>
      </div>
      <ReturnButton />
    </>
  );
}
