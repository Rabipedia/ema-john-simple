import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    const handleEmailBlur = (event) => {
        setEmail(event.target.value);
    }

    const handlePassword = (event) => {
        setPassword(event.target.value);
    }

    const handleConfirmPasswordBlur = (event) => {
        setConfirmPassword(event.target.value);
    }

    const handleCreateUser = (event) => {
        event.preventDefault();
        if( password !== confirmPassword) {
            setError("Your password didn't match")
            return;
        }
    }
  return (
    <div className="form-container">
      <div>
        <h2 className="form-title">Sign Up</h2>
        <form onSubmit={handleCreateUser}>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input onBlur={handleEmailBlur} type="email" name="email" />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input onBlur={handlePassword} type="password" name="passwprd" />
          </div>
          <div className="input-group">
            <label htmlFor="password">Confirm Password</label>
            <input onBlur={handleConfirmPasswordBlur} type="password" name="confirm-passwprd" />
          </div>
          <p style={{colore: 'red'}}>{error}</p>
          <input className="form-submit" type="submit" value="Sign Up" />
        </form>
        <p>
          Already have an account?  
          <Link className="form-link" to="/">
            Log In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
