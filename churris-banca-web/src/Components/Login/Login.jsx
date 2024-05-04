import React from 'react'
import './Login.css'

export const Login = () => {
  return (
    <div className='container'>
        <div className='header'>
            <div className='text'>Login</div>
        </div>
        <div className='form'>
            <div className='input'>
                <input type="email" onChange='' placeholder="Email"/>
            </div>
            <div className='input'>
                <input type="password" onChange='' placeholder="Password"/>
            </div>
            <input type="submit" />
        </div>
    </div>
  )
}

//onChange={(e)=>setEmail(e.target.value)}