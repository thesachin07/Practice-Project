import { useState } from 'react'


function App() {
  const [data, setData] = useState('')
  const [oldUser, setOldUser] = useState([''])
const handleSubmit = (e) => {
  e.preventDefault();
  setOldUser([...oldUser, data]);
  console.log(data)
  setData("");
};

  return (
    <div >
<form className="flex flex-col gap-3" onSubmit={(e) => handleSubmit(e)}>
  <label>Name:</label>
  <input type="text" placeholder="enter text here" value={data} onChange={(e) => setData(e.target.value)} className="border border-slate-500"></input>
  <button>Submit</button>
</form>
<div>
  <h2>
    {oldUser.map((user, index) => (
      <p key={index}>{user}</p>
    ))}
  </h2>
</div>
     </div>
  
  )
}

export default App
