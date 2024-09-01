import React,{useState,useContext} from 'react'
import UserContext from '../../context/userContext'

function Profile() {
    const [username,setUsername]=useState('')
    const [password,setPassword]=useState('')

    const {setUser}=useContext(UserContext)
    
    const handleSubmit=(e)=>{
        e.preventDefault()
        setUser({username,password})

    }
  return (
    <div>
      <h2>Login</h2>
      <input type='text' 
      value={username}
      onChange={(e)=>setUsername(e.target.value)}
      placeholder='username'/> &nbsp;
      <input type='text' 
      value={password}
      onChange={(e)=>setPassword(e.target.value)}
      placeholder='password'/>
      <button onClick ={handleSubmit}>Sumit</button>
    </div>
  )
}

export default Profile
