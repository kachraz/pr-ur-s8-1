import { useState, useRef } from "react";
import Buto from "./Buto";
import azz from "../assets/s.png";

export default function Player() {
  const plaNam = useRef();

  const [entPla, setEntPla] = useState(null);

  function handleClick() {
    setEntPla(plaNam.current.value.toUpperCase());
    plaNam.current.value = "🐵";
  }

  return (
    <section id="player">
      <img
        src={azz}
        alt="ass"
        style={{ width: "40px", margin: "30px", borderRadius: "100px" }}
      />
      <h2>Suckher {entPla ?? "fucker"}</h2>
      <p>
        <input ref={plaNam} type="text" />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
