import React from 'react'
import { NavLink } from 'react-router-dom';
import './Login.css'

export default function Navbar() {
    return (
        <>  <nav className="navbar navbar-expand-lg navbar-light bg-dark ">
                <NavLink className = "nav-link" to = '/'>Topics</NavLink>
                <NavLink className = "nav-link" to = '/login'>Login</NavLink>
                <NavLink className = "nav-link" to = '/register'>Register</NavLink>    
            </nav>
        </>
    )
}