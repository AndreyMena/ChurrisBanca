import React from 'react'
//import './Login.css'
import { useRef, useState, useEffect, useContext } from 'react'
import AuthContext from '../../context/AuthProvider';

import axios from '../../api/axios';

const LOGIN_URL = '/auth';  //TODO: Colocar en un .env, apunta al backend node

const Login = () => {
  const { setAuth } = useContext(AuthContext);
  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState('');
  const [pwd, setPwd] = useState('');
  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, [])

  useEffect(() => {
    setErrMsg('');
  }, [user, pwd])  // Si cambia user o pwd Limpia

  const handleSumbit = async (e) => {
    //TODO: Definir, por ahora evita que se recargue la pagina al submitear por default
    e.preventDefault();  

    try {
      const response = await axios.post(LOGIN_URL, JSON.stringify({user, pwd}),
        {
          headers: {'Content-Type': 'application/json'},
          withCredentials: true
        }
      );
      console.log(JSON.stringify(response?.data));
      const accessToken = response?.data?.accessToken;
      setAuth({user, pwd, accessToken});
      setUser('');
      setPwd('');
      setSuccess(true);
    } catch (err) {
      if (!err?.response) {
        setErrMsg('No server Response');
      }else if (err?.response?.status === 401) {
        setErrMsg('Unauthorized');
      }else{
        setErrMsg('Login Failed');
      }
      errRef.current.focus();
    }
  }

  return (
    <>
      {success ? (
        <section>
          <h1>You are logged in</h1>
          <br />
          <p>
            <a href ="">Home</a>
          </p>
        </section>
      ) : (
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
      )}
    </>
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