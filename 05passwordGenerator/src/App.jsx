import { useState, useCallback,useEffect,useRef } from 'react'

import './App.css'

function App() {

    const [length , setLength]= useState(8)
    const [numberAllow, setNumberAllow]=useState(false)
    const [charAllow, setCharAllow]=useState(false)

    const [password, setPassword]=useState()


    const passwordGenerator=useCallback(()=>{
      let pass =''
      let str='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
      if(numberAllow) str+="0123456789"
      if(charAllow) str+="!#$%&'()*+,-./;<=>?@[\]^_`{|}~"



      for (let i = 1; i <= length; i++) {
        let char = Math.floor(Math.random()*str.length+1);
        
        pass =pass+str.charAt(char)
        
      }
      setPassword(pass)


    },[length,numberAllow,charAllow,setPassword])

    useEffect(()=>{passwordGenerator()},[length,numberAllow,charAllow,passwordGenerator])

    const copyPasswordClipboard = useCallback(()=>{
      passwordRef.current?.select()
      window.navigator.clipboard.writeText(password)
    },[password])

    //useref hook

    let passwordRef= useRef(null)


  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg p-4 my-8 text-orange-500 bg-gray-700">
          <h1 className="text-white text-center">Password Generator</h1>
        <div className="shadow rounded-lg overflow-hidden mb-4 flex">
          
          <input type="text" value={password} className='outline-none w-full   py-1 px-3  ' placeholder='password' readOnly ref={passwordRef}/>
          <button className='bg-blue-600 text-white' onClick={copyPasswordClipboard}>Copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className="flex items-center gap-x-1">
            <input type="range" className="cursor-pointer" min={6} max={50} value={length} onChange={(e)=>{setLength(e.target.value)}}/>
            <label htmlFor="">Length:{length}</label>
          </div>
          <div className="flex items-center gap-x-2">
            <input
            type='checkbox'
            defaultChecked={charAllow}
            id="characterInput"
            // onChange={setCharAllow((prev)=>!prev)}
            onChange={()=>setCharAllow((prev)=>!prev)}
            
            />
            <label htmlFor='characterInput'>Character</label>


            <input
            type='checkbox'
            defaultChecked={numberAllow}
            id="numberInput"
            onChange={()=>setNumberAllow((prev)=>!prev)}
            // onChange={setNumberAllow((prev)=>!prev)}
            
            />
            <label htmlFor='numberInput'>Number</label>
          </div>
        </div>
        </div>
    </>
  )
}

export default App
