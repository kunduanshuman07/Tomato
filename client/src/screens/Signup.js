import React, { useState } from "react";
import axios from "axios";
import "./Signup.css";
const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState();
  async function register() {
    const user = {
      name,
      email,
      password,
      phone,
    };
    try {
      const response = await axios.post("/api/users/register", user);
      const result = response.data;
      console.log(result);
      setName("");
      setEmail("");
      setPassword("");
      setPhone("");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="signup-container">
      <div className="signup-card">
        <h2>Sign Up</h2>
        <input
          type="text"
          placeholder="name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <input
          type="email"
          placeholder="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="phone number"
          value={phone}
          onChange={(e) => {
            setPhone(e.target.value);
          }}
        />
        <button onClick={register}>Sign Up</button>
        <p>
          Already have an account? <a href="/login">Login</a>
        </p>
      </div>
    </div>
  );
};

export default Signup;
