import { useState, useEffect } from 'react'

const App = () => {

  const [count, setCount] = useState(0)
  const handleIncrement = () => {
setCount( count + 1)
  }

  useEffect ( () => {
    console.log("hi everyone")
  })
  return (

    <div className='m-5 p-3 '>
     <div className=''>
      <h1>{count}</h1>
       <button onClick={handleIncrement}>Increment</button>
       </div>
    </div>
  )
}

export default App
