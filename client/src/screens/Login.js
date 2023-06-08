import React, { useState } from "react";
import "./Login.css";
import axios from "axios";
const Login = () => {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  async function login() {
    const user = {
      phone,
      password,
    };
    try {
      const response = await axios.post("/api/users/login", user);
      const result = response.data;
      setPassword("");
      setPhone("");
      localStorage.setItem("currentUser", JSON.stringify(result));
      window.location.href = "/home";
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Login</h2>
        <input
          type="text"
          placeholder="Phone Number"
          value={phone}
          onChange={(e) => {
            setPhone(e.target.value);
          }}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button onClick={login}>Login</button>
        <p>
          Don't have an account? <a href="/signup">Sign Up</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
