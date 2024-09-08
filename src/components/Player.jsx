import { useState } from "react";
import Buto from "./Buto";
import azz from "../assets/s.png";

export default function Player() {
  const [entPla, setEntPla] = useState("");
  const [sub, setSub] = useState("");

  function handleChange(event) {
    setEntPla(event.target.value);
  }

  function handleClick() {}

  return (
    <section id="player">
      <img
        src={azz}
        alt="ass"
        style={{ width: "200px", margin: "30px", borderRadius: "100px" }}
      />
      <h2>Suckher entity</h2>
      <p>
        <input type="text" onChange={handleChange} value={entPla} />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
