// Result Modal

import { forwardRef } from "react";

const ResultModal = forwardRef(function ResultModal(
  { result, targetTime },
  ref
) {
  return (
    <dialog ref={ref} className="result-modal">
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
});

export default ResultModal;
