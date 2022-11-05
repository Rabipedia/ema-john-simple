import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import logo from '../../images/logo.png';
import './Header.css';

const Header = () => {
    const [user] = useAuthState(auth);
    return (
        <div className='header'>
            <img className='logo' src={logo} alt="" />
            <nav>
                <Link to="/home">Shop</Link>
                <Link to="/orders">Order Review</Link>
                <Link to="/inventory">Manage Inventory</Link>
                {
                    user ? <button>Sign Out</button> 
                    : <Link to="/login">Login</Link>
                }
            </nav>
        </div>
    );
};

export default Header;