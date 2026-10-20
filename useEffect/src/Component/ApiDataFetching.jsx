import { useState, useEffect } from 'react'
import Axios from 'axios'

const ApiDataFetching = () => {
const [user, setUser] = useState([])

    useEffect(() => {
        const dataFetch = async () => {
          try{
           const result =  await Axios.get('https://jsonplaceholder.typicode.com/users')
           setUser(result.data)
           console.log(result.data)
        } catch(error){
          console.log('data fetch failed:', error)
        }
      }
        dataFetch()
    }, [])

    
  return (
    <div>
      {user.map((item) => (
        <p key={item.id}>{item.name}</p>
      ))}
          </div>
  )
}

export default ApiDataFetching



