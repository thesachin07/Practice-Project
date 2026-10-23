import React, { useState } from 'react'

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('')

  const handleSearch = (e) => {
    e.preventDefault()
    if (onSearch) {
      onSearch(searchTerm)
    }
    console.log('Searching for:', searchTerm)
  }

  const handleClear = () => {
    setSearchTerm('')
  }

  return (
    <form onSubmit={handleSearch} className="w-full max-w-md mx-auto my-4">
      <div className="relative flex items-center w-full">
        <div className="absolute left-3 text-gray-400">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>

        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search Github user..."
          className="w-full pl-10 pr-20 py-2 text-sm text-gray-800 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
        />

        {searchTerm && (
          <button
            type="button"
            onClick={handleClear}
            className="absolute right-16 text-gray-400 hover:text-gray-600 p-1 rounded-full focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        )}

        <button
          type="submit"
          className="absolute right-1 px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold rounded-md transition-colors duration-200"
        >
          Search
        </button>
      </div>
    </form>
  )
}

export default SearchBar