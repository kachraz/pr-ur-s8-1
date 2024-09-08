// Time challenge functin

import { useState } from "react";

export default function TimerChallenge({ title, targetTime }) {
  const [timSta, setTimSta] = useState(false);
  const [timExp, setTimExp] = useState(false);

  let timer;

  function handleStart() {
    timer = setTimeout(() => {
      setTimExp(true);
    }, targetTime * 1000);

    setTimSta(true);
  }

  function handleStop() {
    clearTimeout(timer);
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
