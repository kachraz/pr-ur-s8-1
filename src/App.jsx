import Player from "./components/Player.jsx";
import TimerChallenge from "./components/TimCha.jsx";

function App() {
  function handleChange() {}

  return (
    <>
      <Player />
      <div id="challenges">
        <TimerChallenge title="easy" targetTime={1} />
        <TimerChallenge title="NoEasy" targetTime={5} />
        <TimerChallenge title="Tough" targetTime={10} />
        <TimerChallenge title="Pro" targetTime={15} />
      </div>
    </>
  );
}

export default App;
