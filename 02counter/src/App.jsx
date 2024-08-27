import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const[counter,setCounter]=useState(15)
  
  // let counter =151

  const addValue=()=>{
    if(counter<20){
      setCounter(counter+1)
    }else{
      alert("You are going beyound limit")
    }
    
    
  }

  const removeValue =()=>{

    // let removevalue=

    if(counter>0){
      console.log(setCounter(counter-1));
    }
    

  }
  return (
    <>
      <h1>Chai aur React</h1>
      <h2>COunter value: {counter} </h2>
      <button onClick={addValue}>Add Value {counter}</button>&nbsp; &nbsp; &nbsp; 
      <button onClick={removeValue}>Remove Value{counter}</button>
      <p>Counter value is {counter}</p>
    </>
  )
}

export default App
