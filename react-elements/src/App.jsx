import React from "react";
import { useState, useEffect } from "react";

function App() {

    const [count, setCount] = useState(0)
    const [text, setText] = useState('')

  const handleChange = (e)=>{
setText(e.target.value)
  }

  const handleUpper = () => {
    setText((prevText) => prevText.toUpperCase())
  }
  const handleLower = () => {
    setText((prevText) => prevText.toLowerCase())
  }
  const handleReset = () => {
    setText('')
  }
    return (
        <>       
         <div className="m-10 p-5 flex items-center gap-4 text-xl ">

            <div><button onClick={ () => setCount  ((count) => Math.min(100, count + 1))} 
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

                   <div><button onClick={ () => setCount  ((count) => 0 )}
             className="px-4 py-2 bg-zinc-800 text-white rounded">
                 Reset
                  </button>
                  </div>
            
       </div>

      
        
        <div className="m-10 p-5">
          <input
            type="text"
            placeholder="Type text here..."
            value={text}
            onChange={handleChange}
            className="border border-zinc-400 px-4 py-2 rounded text-lg w-80 outline-none focus:border-zinc-800"
          />
        </div>

        <div className="flex gap-4 m-10 p-5">
          <button
            onClick={handleUpper}
            className="px-4 py-2 bg-blue-600 text-white rounded active:scale-95"
          >
            UpperCase
          </button>

          <button
            onClick={handleLower}
            className="px-4 py-2 bg-emerald-600 text-white rounded active:scale-95"
          >
            LowerCase
          </button>

          <button
            onClick={handleReset}
            className="px-4 py-2 bg-rose-600 text-white rounded active:scale-95"
          >
            Clear Text
          </button>
          </div>
     
      
       </>
    );
}

export default App;