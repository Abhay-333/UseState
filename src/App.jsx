import React from 'react'
import { useState } from 'react'

function App() {
  const [val, setVal] = useState(0)
  const [banned, setBanned] = useState(true)
  const [score, setScore] = useState(10)
  const [person, setPerson] = useState({name:"Abhay", age:23, isBanned: true})
  
  return (
    <div className='p-10'>
      <h1>{val}</h1>

      <button onClick={()=>setVal(10)} className='px-4 py-2 bg-blue-400 rounded-lg text-white font-semibold'>Change Value</button>

      
      <h1>{banned.toString()}</h1>

      <button onClick={()=>setBanned(!banned)} className='px-4 py-2 bg-blue-400 rounded-lg text-white font-semibold'>Change Value</button>

      
      <h1>{score}</h1>

      <button onClick={()=>setScore((perv)=>perv+5)} className='px-4 py-2 bg-blue-400 rounded-lg text-white font-semibold'>Change Value</button>

      
      <h1>{person.name}</h1>
      <h1>{person.age}</h1>
      <h1>{person.isBanned.toString()}</h1>

      <button onClick={()=>setPerson({...person, isBanned: !person.isBanned})} className='px-4 py-2 bg-blue-400 rounded-lg text-white font-semibold'>Change Value</button>





    </div>
  )
}

export default App