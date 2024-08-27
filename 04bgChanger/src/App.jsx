import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color,setColor]=useState('olive')

  return (
    <>
      <div className="max-full h-screen duration-200" style={{backgroundColor:color}}></div>

      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>

        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-2xl">
          <button className='outline-none px-4 py-1 rounded-sm ' style={{backgroundColor:"Red"}} onClick={()=>setColor('Red')}>Red</button>
          <button className='outline-none px-4 py-1  ' style={{backgroundColor:"Blue"}} onClick={()=>setColor('Blue')}>Blue</button>
          <button className='outline-none px-4 py-1  ' style={{backgroundColor:"Green"}}>Green</button>
          <button className='outline-none px-4 py-1  ' style={{backgroundColor:"Olive"}}>Olive</button>
          <button className='outline-none px-4 py-1  ' style={{backgroundColor:"Red"}}>Red</button>
          <button className='outline-none px-4 py-1  ' style={{backgroundColor:"Red"}}>Red</button>
        </div>
      </div>
    </>
  )
}

export default App
