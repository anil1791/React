
import { useState } from 'react'
import './app.css'

export function App() {
  const [color, changeColor] = useState('grey');

  return (
    <div className='w-full h-screen duration-200' style={{ backgroundColor: color }}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
          <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg' onClick={()=> { return changeColor("red")}} style={{ backgroundColor: "red" }}>Red</button>
          <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg' onClick={()=> { return changeColor("green")}} style={{ backgroundColor: "green" }}>Green</button>
          <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg' onClick={()=> { return changeColor("white")}} style={{ backgroundColor: "white" }}>White</button>
          <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg' onClick={()=> { return changeColor("blue")}} style={{ backgroundColor: "blue" }}>Blue</button>
          <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg' onClick={()=> { return changeColor("orange")}} style={{ backgroundColor: "orange" }}>Orange</button>
          <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg' onClick={()=> { return changeColor("olive")}} style={{ backgroundColor: "olive" }}>Olive</button>
          <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg' onClick={()=> { return changeColor("purple")}} style={{ backgroundColor: "purple" }}>Purple</button>
        </div>
      </div>
    </div>
  )
}
