import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const LogIn = ({setLoggedIn, redirect}) => {
    const navigate = useNavigate();
    const savedUserCreds = [{username: 'Talino', password: 'ugjzgfSlkjhl7.'}, {username: 'Rami', password: '123456789'}]

    const [userCreds,setUserCreds] = useState({username: '', password: ''})
    
    const submit = (e) =>{
//        setUserCreds({...userCreds, username: document.getElementsByName('username').value});
        e.preventDefault();
        let found = savedUserCreds.find(user=>{return user.username===userCreds.username && user.password === userCreds.password})
        if(found)
        {
            alert(`Logged in successful!\nLogged in as ${found.username}!`)
            setLoggedIn(true);
            navigate(-1);
        }
        else
        alert('Log in failed!\nPlease enter the correct username and password combination.')
    }

  return (
    <div>
    <h2>Log In</h2>
    <form onSubmit={submit}>
        <label htmlFor="username"> Username
            <input type="text" name='username' value={userCreds.username} onChange={(e)=>setUserCreds({...userCreds, username: e.target.value})} required/>
        </label>
        <label htmlFor="pass"> Password
            <input type="password" name='pass' value={userCreds.password} onChange={(e)=>setUserCreds({...userCreds, password: e.target.value})} required/>
        </label>
        <button type='submit'>Log In</button>
    </form>
    </div>
  )
}

export default LogIn