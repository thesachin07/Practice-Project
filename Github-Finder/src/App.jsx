import React, { useState } from 'react'
import Navbar from './Components/Navbar'
import Searchbar from './Components/Searchbar'
import DummyUser from './Components/DummyUser'
import DummyRepos from './Components/DummyRepos'


const App = () => {
 const [userData, setUser] = useState(null)
 const [repo, setRepo] = useState([])
 const [loading, setLoading] = useState(false)
 const [error, setError] = useState(null)

  return (
    <div>
      <Navbar/>
      <Searchbar/>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
        <DummyUser user={dummyUser} />
        <DummyRepos repos={dummyRepos} />
      </div>
    </div>
  )
}

export default App
