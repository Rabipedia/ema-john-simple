import React from "react";
import "./Login.css";

const Login = () => {
  return (
    <div className="form-container">
      <div>
        <h2 className="form-title">Login</h2>
        <form>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input type="password" name="passwprd" />
          </div>
          <input className="form-submit" type="submit" value="Login" />
        </form>
      </div>
    </div>
  );
};

export default Login;
