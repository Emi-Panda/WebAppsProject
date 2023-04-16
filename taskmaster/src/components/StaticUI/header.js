import React from 'react';
import '../../CSS/header.css';

export default function Header() {
    const image = require("../images/logo.png");
    return (
        <div className='header'>
            <div className="header-content">
                <img src={image}  alt="Logo" />
                <div className="page-title">Task-Master</div>
                <div className="header-right">
                    <div className="welcome-message">Welcome, User</div>
                    <nav className="login-signup-nav">
                        <a className="login-button" href="list.html">Login</a>
                        <a className="signup-button" href="/SignIn">Sign-up</a>
                    </nav>
                </div>
            </div>
        </div>
    );
}

