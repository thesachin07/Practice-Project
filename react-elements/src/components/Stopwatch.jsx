import { useState, useEffect, useRef } from "react";

const Stopwatch = () => {
  // ---- LAYER 1: STATE (jo UI pe dikhta hai) ----
  const [hr, setHr]   = useState(0);
  const [min, setMin] = useState(0);
  const [sec, setSec] = useState(0);
  const [running, setRunning] = useState(false);

  // ---- LAYER 2: REF (jo yaad rakhna hai, UI se related nahi) ----
  const intervalRef = useRef(null);

  // ---- LAYER 2.5: EFFECT (side effect = setInterval) ----
  useEffect(() => {
    if (!running) return;
setSec(prev => {
        if (prev + 1 === 60) {
          setMin(m => {
            if (m + 1 === 60) {
              setHr(h => h + 1);
              return 0;
            }
            return m + 1;
          });
          return 0;
        }
        return prev + 1;
      });
    intervalRef.current = setInterval(() => {
      setSec(prev => {
        if (prev + 1 === 60) {
          setMin(m => {
            if (m + 1 === 60) {
              setHr(h => h + 1);
              return 0;
            }
            return m + 1;
          });
          return 0;
        }
        return prev + 1;
      });
    }, 1000);

    return () => clearInterval(intervalRef.current);  // cleanup
  }, [running]);

  // ---- LAYER 3: HANDLERS (sirf state badlo) ----
  const handleStart = () => setRunning(true);
  const handleStop  = () => setRunning(false);
  const handleReset = () => {
    setRunning(false);
    setHr(0);
    setMin(0);
    setSec(0);
  };

  // ---- LAYER 4: DERIVED VALUE (state nahi) ----
  const display =
    `${String(hr).padStart(2, "0")} : ` +
    `${String(min).padStart(2, "0")} : ` +
    `${String(sec).padStart(2, "0")}`;

  return (
    <div>
      <h1 className="text-3xl font-bold text-center text-white bg-gray-800 p-4 rounded-lg shadow-lg">
        {display}
      </h1>
      <div className="flex justify-center gap-4 mt-4">
        <button onClick={handleStart} disabled={running} className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition-colors">
          Start
        </button>
        <button onClick={handleStop}  disabled={!running} className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-colors">
          Stop
        </button>
        <button onClick={handleReset} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors">
          Reset
        </button>
      </div>
    </div>
  );
};

export default Stopwatch;