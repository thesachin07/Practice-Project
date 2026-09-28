import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="m-10 p-5 flex items-center gap-4 text-xl">
      <button
        onClick={() => setCount((count) => Math.min(100, count + 1))}
        className="px-4 py-2 bg-zinc-800 text-white rounded"
      >
        +
      </button>

      <div>{count}</div>

      <button
        onClick={() => setCount((count) => Math.max(0, count - 1))}
        className="px-4 py-2 bg-zinc-800 text-white rounded"
      >
        -
      </button>

      <button
        onClick={() => setCount(0)}
        className="px-4 py-2 bg-zinc-800 text-white rounded"
      >
        Reset
      </button>
    </div>
  );
}

export default Counter;