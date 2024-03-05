import { useCallback, useEffect, useState } from "react";

export default function StopWatch() {
  const [running, setRunning] = useState(false);
  const [timer, setTimer] = useState(0);

  const updateTimer = useCallback(() => {
    if (running) {
      setTimer((timer) => timer + 10);
    }
  }, [running]);

  useEffect(() => {
    if (running) {
      const intervalId = setInterval(updateTimer, 10);
      return () => clearInterval(intervalId);
    }
  }, [running, updateTimer]);

  const startStop = useCallback(() => {
    setRunning(!running);
  }, [running]);

  const reset = useCallback(() => {
    setTimer(0);
  }, []);

  const mins = (Math.floor((timer / (1000 * 60)) % 60)).toString().padStart(2, "0");
  const secs = (Math.floor((timer / 1000) % 60)).toString().padStart(2, "0");
  const mills = (timer % 1000).toString().padStart(3, "0");

  return (
    <div style={{ width: "100vw", textAlign: "center" }}>
      <p style={{ fontSize: "7em", margin: "auto", fontFamily: "monospace" }}>
        {mins}:{secs}:{mills}
      </p>

      <button style={{"fontSize": "4em"}} onClick={startStop}>
        {running ? "Pause" : "Start"}
      </button>

      <button style={{"fontSize": "4em"}} onClick={reset}>
        Reset
      </button>
    </div>
  );
}