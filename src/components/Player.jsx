import { useState } from "react";
import Buto from "./Buto";
import azz from "../assets/s.png";

export default function Player() {
  const [entPla, setEntPla] = useState(null);
  const [subm, setSubm] = useState(false);

  function handleChange(event) {
    setSubm(false);
    setEntPla(event.target.value.toUpperCase());
  }

  function handleClick() {
    setSubm(true);
  }

  return (
    <section id="player">
      <img
        src={azz}
        alt="ass"
        style={{ width: "40px", margin: "30px", borderRadius: "100px" }}
      />
      <h2>Suckher {subm ? entPla : "fucker"}</h2>
      <p>
        <input type="text" onChange={handleChange} value={entPla} />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
