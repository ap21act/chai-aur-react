import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from '../components/Card'

function App() {
  let myObj={
    username:"hitesh",
    age:21
  }
  let myArr=[1,2,3]
  let username="adarsha paudel"
  

  return (
    <>
      <h1 className="text-3xl underline text-yellow-800 flex font-extrabold bg-white p-4 rounded-xl mb-4">
        Hello world!
      </h1>
      <Card username="hjkk" someObj={myObj} arr={myArr}/>
      <Card username={username} btnText="CLick ad"/>

     
    </>
  )
}

export default App
