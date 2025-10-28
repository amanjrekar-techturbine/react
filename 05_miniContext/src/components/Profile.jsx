import React from 'react'
import { useContext } from 'react'
import UserContext from '../context/userContext'

function Profile() {

    const {user} = useContext(UserContext);

    if(!(user?.username && user?.password)) return <h1>Please Login</h1>

  return (
    <div><h1>Welcome {user.username}</h1></div>
  )
}

export default Profile