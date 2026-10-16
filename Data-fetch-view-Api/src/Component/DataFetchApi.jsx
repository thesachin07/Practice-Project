import { useState } from 'react'
import axios from 'axios'

const App = () => {
  const [user, setUser] = useState(null)

  const handleClick = async () => {
    const result = await axios.get('https://jsonplaceholder.typicode.com/posts')
    setUser(result.data)
    console.log(result)
  }

  return (
    <div className='m-5 p-3'>
      <div>
        <button onClick={handleClick} className='bg-green-600 p-3 border rounded text-xl font-lg'>
          Click me
        </button>
        {user && user.map((item, id) => (
          <div key={id}>{item.id}-{item.title}</div>
        ))}
      </div>
    </div>
  )
}

export default App
