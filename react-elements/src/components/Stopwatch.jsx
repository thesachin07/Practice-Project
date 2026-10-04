import { useState, useRef, useEffect } from "react";

export default function Stopwatch() {
  const [elapsed, setElapsed] = useState(0);   // total ms
  const [running, setRunning] = useState(false);

  const startTimeRef = useRef(0);   // jab start hua (Date.now() - elapsed)
  const intervalRef  = useRef(null); // setInterval ki id

  // Timer chalu/band karne ka effect
  useEffect(() => {
    if (!running) return;

    startTimeRef.current = Date.now() - elapsed;

    intervalRef.current = setInterval(() => {
      setElapsed(Date.now() - startTimeRef.current);
    }, 10);

    return () => clearInterval(intervalRef.current);   // cleanup
  }, [running]);

  // Format logic (same as before)
  const formatTime = (elapsed) => {
    const s = Math.floor(elapsed / 1000) % 60;
    const m = Math.floor(elapsed / 60000) % 60;
    const h = Math.floor(elapsed / 3600000);

    return (
      String(h).padStart(2, "0") + ":" +
      String(m).padStart(2, "0") + ":" +
      String(s).padStart(2, "0")
    );
  };

  const handleStart = () => setRunning(true);
  const handleStop  = () => setRunning(false);

  const handleReset = () => {
    setRunning(false);
    setElapsed(0);
  };

  return (
    <div style={{ textAlign: "center", fontFamily: "monospace" }}>
      <h1 style={{ fontSize: "48px" }}>{formatTime(elapsed)}</h1>

      <button onClick={handleStart} disabled={running} className="btn btn-primary ">
        Start
      </button>
      <button onClick={handleStop} disabled={!running} className="btn btn-danger">
        Stop
      </button>
      <button onClick={handleReset} className="btn btn-secondary">
        Reset
      </button>
    </div>
  );
}