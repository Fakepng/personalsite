import React from 'react'
import './Navbar.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <header className="navbar">
            <NavLink className="navlink" activeclassname="active" to='/' exact='true'>Home</NavLink>
            <NavLink className="navlink" activeclassname="active" to='/about'>About</NavLink>
            <NavLink className="navlink" activeclassname="active" to='/education'>Education</NavLink>
            <NavLink className="navlink" activeclassname="active" to='/project'>Project</NavLink>
        </header>
    )
}

export default Navbar