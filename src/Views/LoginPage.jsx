import React, { useState } from "react";
import { login } from "../Controllers/LoginPageController";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const redirect = useNavigate();

  const handleSubmit = async () => {
    try {
      const response = await axios.post("http://127.0.0.1:8000/api/login/", {
        email: email,
        username: username,
        password: password,
      });
      const data = response.status;
      if (data === 200) {
        localStorage.setItem("email", email);
        alert("Login Successful");
        redirect("/");
      } else {
        alert("Invalid Credentials");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container">
      <h1>LoginPage</h1>
      <div className="login-form">
        <label htmlFor="email"></label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="username"></label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          name="username"
          placeholder="Username"
        />
        <label htmlFor="password"></label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleSubmit}>Login</button>
      </div>
    </div>
  );
};

export default LoginPage;
