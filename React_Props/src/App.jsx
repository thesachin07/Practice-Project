import React, { useState } from 'react'
import Card from './Components/Card'

const App = () => {
  const [count, setCount] = useState(0)
  const [user, setUser] = useState([
    {
      id: 1,
      name: 'John Doe',
      likes: 100,
    },
    {
      id: 2,
      name: 'Carls Johnson',
      likes: 200,
    },
  ])

  const handleIncrement = () => {
    setCount((currentCount) => currentCount + 1)
  }

  const handleLikeIncrement = (userId) => {
    setUser((previousUsers) =>
      previousUsers.map((u) =>
        u.id === userId ? { ...u, likes: u.likes + 1 } : u
      )
    )
  }

  return (
    <div className='min-h-screen flex items-center justify-center bg-slate-900 gap-5'>
      {user.map((u) => (
        <Card
          key={u.id}
          userId={u.id}
          title={u.name}
          text='This is a sample card with some placeholder text.'
          like={u.likes}
          post={50}
          view={200}
          count={count}
          handleIncrement={handleIncrement}
          handleLikeIncrement={handleLikeIncrement}
        />
      ))}
    </div>
  )
}

export default App