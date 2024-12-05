import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./LoginPage.css";

const LoginPage = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const redirect = useNavigate();

  const handleSubmit = async () => {
    try {
      const response = await axios.post("http://127.0.0.1:8000/api/login/", {
        email: email,
        password: password,
      });
      const status = response.status;
      const data = response.data;
      console.log(data);
      if (status === 200) {
        localStorage.setItem("token", data.token);
        document.cookie = "token =" + data.token + ";";
        alert("Login Successful");
        redirect("/");
      }
    } catch (error) {
      if (error.status === 404) {
        alert("Invalid Credentials");
      }
      console.log(error);
    }
  };

  return (
    <body className="lBody">
      <div className="containers">
        <h1>Login</h1>
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
            Login
          </button>
          <a href="SignUp" id="?">
            Sign Up?
          </a>
        </div>
      </div>
    </body>
  );
};

export default LoginPage;
