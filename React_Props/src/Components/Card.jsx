import React from 'react'

const Card = ({ title, text, like, post, view, count, userId, handleIncrement, handleLikeIncrement }) => {
  return (
    <div className='bg-gray-300 p-6 rounded-3xl shadow-xl w-80 text-center border border-gray-100 font-sans'>
      {/* Top Banner Section */}
      <div className='relative h-24 w-full bg-gradient-to-r from-sky-200 to-indigo-100 rounded-2xl mb-10'>
        <p className='absolute top-3 left-3 bg-green-300 text-gray-800 text-xs font-medium px-3 py-1 rounded-full shadow-sm'>
          Yeh Joh yellow clr mai highlight hai wo props se aa rha hai
        </p>

        {/* Profile Avatar */}
        <div className='flex absolute -bottom-8 left-1/2 -translate-x-1/2'>
          <div className='w-16 h-16 rounded-full border-2 border-white overflow-hidden shadow-md bg-amber-100'>
            <img
              src='https://api.dicebear.com/7.x/bottts/svg?seed=Noah'
              alt='Avatar'
              className='w-full h-full object-cover'
            />
          </div>
          <div className='ml-4'>
            <p className='text-lg font-bold text-gray-800'>{count}</p>
            <button onClick={() => handleIncrement(userId)} className='p-2 bg-white text-gray-800 hover:bg-gray-200'>
              Increment
            </button>
          </div>
        </div>
      </div>

      {/* User Info from props */}
      <h2 className='text-lg font-bold text-gray-800 bg-amber-200'>{title}</h2>
      <p className='text-xs text-gray-500 mt-1 mb-5 leading-relaxed px-2 bg-amber-200'>{text}</p>

      {/* Stats Section using props */}
      <div className='flex justify-between items-center py-3 border-t border-b border-gray-100'>
        <div className='flex-1 text-center'>
          <button onClick={() => handleLikeIncrement(userId)} className='text-sm font-bold text-gray-800 bg-amber-200'>
            {like}
          </button>
          <p className='text-[10px] text-gray-400'>Likes</p>
        </div>
        <div className='flex-1 text-center border-x border-gray-100'>
          <p className='text-sm font-bold text-gray-800 bg-amber-200'>{post}</p>
          <p className='text-[10px] text-gray-400'>Posts</p>
        </div>
        <div className='flex-1 text-center'>
          <p className='text-sm font-bold text-gray-800 bg-amber-200'>{view}</p>
          <p className='text-[10px] text-gray-400'>Views</p>
        </div>
      </div>

      {/* Social Icons */}
      <div className='flex justify-around items-center pt-4 text-gray-600 text-xs'>
        <button className='hover:opacity-75'>📷</button>
        <button className='hover:opacity-75'>𝕏</button>
        <button className='hover:opacity-75'>🌐</button>
      </div>
    </div>
  )
}

export default Card