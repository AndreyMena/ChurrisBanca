import React from "react";
import { useRef, useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "@mui/material";
import { useAuthStore } from "../../hooks/useAuthStore";
import "./Login.css";
import "../../App.css";

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

    startLogin({ email: user, pwd: pwd });
  };

  return (
    <section id="container-login">
      <div id="card">
        <h1>Sign in</h1>
        <form onSubmit={handleSumbit}>
          <input
            className="input"
            type="text"
            id="username"
            ref={userRef}
            autoComplete="off"
            onChange={(e) => setUser(e.target.value)}
            value={user}
            required
            placeholder="Email"
          />
        
          <input
            className="input"
            input="input"
            type="password"
            id="password"
            onChange={(e) => setPwd(e.target.value)}
            value={pwd}
            required
            placeholder="Password"
          />
          
          <p
            id="error-msg"
            ref={errRef}
            className={errMsg ? "errmsg" : "offscreen"}
            aria-live="assertive"
          >
            {errMsg}
          </p>

          <Button variant="contained" id="button" >Sign in</Button>
        </form>
      </div>
    </section>
  );
};

export default Login;
