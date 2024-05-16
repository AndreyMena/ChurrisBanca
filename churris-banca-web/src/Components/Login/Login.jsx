import React from 'react'
//import './Login.css'
import { useRef, useState, useEffect } from 'react'
import useAuth from '../../hooks/useAuth';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from '../../api/axios';

const LOGIN_URL = '/auth';  //TODO: Colocar en un .env, apunta al backend node

const Login = () => {
  const { setAuth } = useAuth();

  const navigate = useNavigate();
  const location = useLocation();
  const from = /*location.state?.from?.pathname ||*/ "/socialPage";
  
  
  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState('');
  const [pwd, setPwd] = useState('');
  const [errMsg, setErrMsg] = useState('');

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
      navigate(from, {replace: true});
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
    </>
  )
}

export default Login
