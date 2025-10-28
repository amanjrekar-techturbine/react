import React from 'react'
import { useState, useContext } from 'react'
import UserContext from '../context/userContext';

function Login() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const {setUser} = useContext(UserContext);

    const handleSubmit = () => {
        setUser({username, password});
    }

  return (
   <>
    <input type="text" name="" id="" placeholder='username' onChange={(e)=>{setUsername(e.target.value)}} />
    <input type="text" name="" id="" placeholder='password' onChange={(e)=>{setPassword(e.target.value)}} />
    <button type='button' onClick={handleSubmit}>SUBMIT</button>
   </>
  )
}

export default Login