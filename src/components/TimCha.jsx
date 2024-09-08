// Time challenge functin

import { useState, useRef } from "react";

// let timer;

export default function TimerChallenge({ title, targetTime }) {
  const timer = useRef();

  const [timSta, setTimSta] = useState(false);
  const [timExp, setTimExp] = useState(false);

  function handleStart() {
    timer.current = setTimeout(() => {
      setTimExp(true);
    }, targetTime * 1000);

    setTimSta(true);
  }

  function handleStop() {
    clearTimeout(timer.current);
  }

  return (
    <section className="challenge">
      <h2>{title}</h2>
      {timExp && <p>FUCKED!</p>}
      <p className="challenge-time">
        {targetTime} second{targetTime > 1 ? "s" : ""}
      </p>
      <p>
        <button onClick={timSta ? handleStop : handleStart}>
          {timSta ? "Stop" : "Start"}Panty
        </button>
      </p>
      <p className={timSta ? "active" : undefined}>
        {timSta ? "Sniffing..." : "SniffInactive"}
      </p>
    </section>
  );
}
