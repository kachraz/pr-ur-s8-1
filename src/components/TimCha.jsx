// Time challenge functin

import { useState } from "react";

export default function TimerChallenge({ title, targetTime }) {
  const [timSta, setTimSta] = useState(false);
  const [timExp, setTimExp] = useState(false);

  function handleStart() {
    setTimeout(() => {
      setTimExp(true);
    }, targetTime * 1000);

    setTimSta(true);
  }

  return (
    <section className="challenge">
      <h2>{title}</h2>
      {timExp && <p>FUCKED!</p>}
      <p className="challenge-time">
        {targetTime} second{targetTime > 1 ? "s" : ""}
      </p>
      <p>
        <button onClick={handleStart}>{timSta ? "Stop" : "Start"}Panty</button>
      </p>
      <p className={timSta ? "active" : undefined}>
        {timSta ? "Sniffing..." : "SniffInactive"}
      </p>
    </section>
  );
}
