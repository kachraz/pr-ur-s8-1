import { useState } from "react";
import Buto from "./Buto";

export default function Player() {
  const [entPla, setEntPla] = useState("");

  function handleChange(event) {
    setEntPla(event.target.value);
  }

  function handleClick() {}

  return (
    <section id="player">
      <h2>Suckher entity</h2>
      <p>
        <input type="text" onChange={handleChange} value={entPla} />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
