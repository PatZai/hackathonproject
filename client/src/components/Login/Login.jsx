import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./registerstyle.css";

export const Login = (props) => {
  const [name, setName] = useState("");
  const [pass, setPass] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name);
  };

  return (
    <div className="login">
      <div className="auth-form-container">
        <h2>Login</h2>
        <form className="login-form" onSubmit={handleSubmit}>
          <label htmlFor="name">Email / User name</label>
          <input
            value={name}
            name="name"
            onChange={(e) => setName(e.target.value)}
            id="name"
            placeholder="email@gmail.com / user name"
          />
          <label htmlFor="password">Password</label>
          <input
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            type="password"
            placeholder="********"
            id="password"
            name="password"
          />
          <button type="submit" onclick="myFunction()" className="btn-login reglogin">
            Log In
          </button>
        </form>
        {/* <button
					className="link-btn"
					onClick={() => props.onFormSwitch('/register')}
				>
					Don't have an account? Register here.
				</button> */}
        <button className="link-btn">
          <Link to="/register" className="link-btn">
            Don't have an account? Register here.
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Login;
