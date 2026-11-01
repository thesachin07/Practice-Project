import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'

const Github = () => {
    const {userid} = useParams()
    const [data, setData] = useState({})

    useEffect(() =>{
        fetch('https://github.com/thesachin07/')
        .then(response => response.json())
         .then(data => {
            console.log(data);
            setData(data)})
    }, [userid])

  return (
    <div>
      <h1>github followers : {data.followers}</h1>
    </div>
  )
}

export default Github
