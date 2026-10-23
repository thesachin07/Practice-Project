import { useState } from 'react'

const Another = () => {
      const [count, setCount] = useState(0)
  const [name, setName] = useState("")

 const handleClick = async () =>{
  const hi = await fetch('https://dummyjson.com/users')
  const hi2 = await hi.json();
  setCount ( count + 1)
 
  const hi3 = hi2.users.map((user) => user.firstName.join(', '))
  setName(hi3)
 
 }

  return (
   <div>
     <h1>{count}</h1>
     <h2>{name}</h2>
     <button onClick={handleClick}>Increment</button>
    </div>
  )
}

export default Another


