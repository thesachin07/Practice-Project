import React, { useState } from 'react'

const App = () => {
  const [rating, setRating] = useState(0);

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex gap-2">
        {['★', '★', '★', '★', '★'].map((s, index) => {
          const starNumber = index + 1;
          return (
            <span 
              key={index} 
              className={`text-5xl cursor-pointer transition-colors ${
                starNumber <= rating ? 'text-yellow-400' : 'text-gray-300'
              }`}
              onClick={() => setRating(starNumber)}
            >
              {s}
            </span>
          );
        })}
      </div>
    </div>
  )
}

export default App