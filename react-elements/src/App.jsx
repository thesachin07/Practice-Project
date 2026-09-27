import React from "react";
import { useState } from "react";

function App() {

    const [count, setCount] = useState(0)
    return (
        <div className="m-10 p-5 flex items-center gap-4 text-xl ">

            <div><button onClick={ () => setCount  ((count) => Math.min(3, count + 1))} 
            className="px-4 py-2 bg-zinc-800 text-white rounded">
                +
             </button>
            </div>

            <div className="">{ count}</div>
            <div><button onClick={ () => setCount  ((count) => Math.max(0, count - 1))}
             className="px-4 py-2 bg-zinc-800 text-white rounded">
                 -
                  </button>
                  </div>

        </div>
    );
}

export default App;