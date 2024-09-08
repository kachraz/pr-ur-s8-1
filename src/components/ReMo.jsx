// Result Modal

export default function ResultModal({ result, targetTime }) {
  return (
    <dialog className="result-modal" open>
      <h2>u {result}</h2>
      <p>
        TargetTime <strong>{targetTime} secs.</strong>
      </p>
      <p>
        TimerStopped <strong>X secs left</strong>
      </p>
      <form method="dialog">
        <button>Close</button>
      </form>
    </dialog>
  );
}
