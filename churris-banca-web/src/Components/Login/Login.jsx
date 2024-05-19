import React from "react";
//import './Login.css'
import { useRef, useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuthStore } from "../../hooks/useAuthStore";

const Login = () => {
  const { startLogin, msg } = useAuthStore();
  const navigate = useNavigate();

  const location = useLocation();
  const from = /*location.state?.from?.pathname ||*/ "/socialPage";

  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd]); // Si cambia user o pwd Limpia

  useEffect(() => {
    if (msg === "Login Successful") {
      setUser("");
      setPwd("");
      navigate(from, { replace: true });
    } else {
      setErrMsg(msg);
      errRef.current.focus();
    }
  }, [msg]);

  const handleSumbit = (e) => {
    //TODO: Definir, por ahora evita que se recargue la pagina al submitear por default
    e.preventDefault();

    startLogin({ user: user, pwd: pwd });
  };

  return (
    <>
      <section>
        <p
          ref={errRef}
          className={errMsg ? "errmsg" : "offscreen"}
          aria-live="assertive"
        >
          {errMsg}
        </p>
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
  );
};

export default Login;
