import React from 'react';
import '../../CSS/navbar.css';

export default function Navbar() {
    return (
        <div className='navbar'>
            <nav class="page-nav">
                <a href="/">Home</a>
                <a href="/list">My To Do List</a>
                <a href="/detail">Details</a>
                <a href="/create">Create New</a>
            </nav>
        </div>
    );
}

