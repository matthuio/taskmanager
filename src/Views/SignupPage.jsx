import React, { useState } from "react";
import { register } from "../Controllers/LoginPageController";
import { useNavigate } from "react-router-dom";
// import "./LoginPage.css";

const SignupPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const redirect = useNavigate();
  const handleSubmit = () => {
    register(email, username, password);
    redirect("/login");
  };

  return (
    <body className="lBody">
      <div className="containers">
        <h1>Register</h1>
        <div className="signup-form">
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
          <button className="lBtn" onClick={handleSubmit}>
            Register
          </button>
          <a href="login">Login?</a>
        </div>
      </div>
    </body>
  );
};

export default SignupPage;
