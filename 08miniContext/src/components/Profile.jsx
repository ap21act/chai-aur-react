import React,{useState,useContext} from 'react'
import UserContext from '../../context/userContext'

function Profile() {
    const {user}=useContext(UserContext)

    if(!user) return <div>Please login</div>

  return (
    <div>
      Profile {user.username}
    </div>
  )
}

export default Profile
