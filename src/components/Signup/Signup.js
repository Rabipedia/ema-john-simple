import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from './../../firebase.init';
import { createUserWithEmailAndPassword } from "firebase/auth";

const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const [ createUserWithEmailAndPassword, user ] = useCreateUserWithEmailAndPassword(auth);

    const handleEmailBlur = (event) => {
        setEmail(event.target.value);
    }

    const handlePassword = (event) => {
        setPassword(event.target.value);
    }

    const handleConfirmPasswordBlur = (event) => {
        setConfirmPassword(event.target.value);
    }

    if(user){
      navigate('/')
    }

    const handleCreateUser = (event) => {
        event.preventDefault();
        if( password !== confirmPassword) {
            setError("Your password didn't match")
            return;
        }
        if(password.length > 6) {
          setError('Your password is very short');
          return;
        }

        createUserWithEmailAndPassword(email, password)
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
