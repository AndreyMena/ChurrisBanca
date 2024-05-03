import React from "react"

function Login() {
    return (
        <div className="login">
            <h1>Login</h1>
            <form action="post">
                <input type="email" onChange={(e)=>setEmail(e.target.value)} placeholder="Email"/>
                <input type="password" onChange={(e)=>setPassword(e.target.value)} placeholder="Password"/>
                <input type="submit" />
            </form>
        </div>
        
    )
}