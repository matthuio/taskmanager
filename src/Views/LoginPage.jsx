import React, { useState } from "react";
import { login } from "../Controllers/LoginPageController";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = () => {
    login(email, username, password);
    console.log(email, username, password);
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
