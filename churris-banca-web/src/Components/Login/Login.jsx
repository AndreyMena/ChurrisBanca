import React from 'react'
//import './Login.css'
import { useRef, useState, useEffect } from 'react'

const Login = () => {
  const userRef = userRef();
  const errRef = useRef();

  const [user, setUser] = useState('');
  const [pwd, setPwd] = useState('');
  const [errMsg, setErrMsg] = useState('');
  const [succes, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, [])

  useEffect(() => {
    setErrMsg('');
  }, [user, pwd])  // Si cambia user o pwd Limpia

  const handleSumbit = async (e) => {
    e.preventDefault();
    console.log(user, pwd);
    setUser('');
    setPwd('');
    setSuccess(true);

  }

  return (
    <section>
      <p ref={errRef} className={errMsg ? "errmsg": "offscreen"} 
      aria-live="assertive">{errMsg}</p>
      <h1>Sign in</h1>
      <form onSubmit={handleSumbit}>
        <label htmlFor="username">Username:</label>
        <input 
          type="text" 
          id="username" 
          ref={userRef} 
          autoComplete="off" 
          onChange={(e) => setUser(e.target.value)}
          value={user}
          required
        />
        
        <label htmlFor="password">Password:</label>
        <input 
          type="password" 
          id="password" 
          onChange={(e) => setPwd(e.target.value)}
          value={pwd}
          required
        />
        <button>Sign in</button>
      </form>
    </section>
  )
}

export default Login
/*
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
*/
//onChange={(e)=>setEmail(e.target.value)}