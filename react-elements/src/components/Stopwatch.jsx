import React from 'react'
import { useState, useEffect } from 'react'

const Stopwatch = () => {

    const [count, setCount] = useState(0)

    const handleCount = () => {setCount((count)=> count+1 )}

    const handleReset = ()=> {(setCount) => 0 }
    
  return (
    <div>
        <h1 className='items-center justify-center text-amber-200'> StopWatch</h1>

    <div className=""><button onClick={handleCount}>Start</button></div>
    <div className=""><button onClick={handleReset}>Reset</button></div>
    <div className=""><button>Lap</button></div>
      
    </div>
  )
}

export default Stopwatch