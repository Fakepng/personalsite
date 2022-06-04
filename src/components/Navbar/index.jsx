import React, { useState } from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
	const [click, setClick] = useState(false);
	const handleClick = () => setClick(!click);

	return (
		<>
			<div className='navbardiv'>
				<header className='navbar'>
					<NavLink className='navlogo' to='/' exact='true'>
						<img src='/images/fakepng.svg' height='60px' alt='fakepng' />
					</NavLink>
					<NavLink
						className='navlink'
						activeclassname='active'
						to='/'
						exact='true'
					>
						Home
					</NavLink>
					<NavLink className='navlink' activeclassname='active' to='/about'>
						About
					</NavLink>
					<NavLink className='navlink' activeclassname='active' to='/education'>
						Education
					</NavLink>
					<NavLink className='navlink' activeclassname='active' to='/project'>
						Project
					</NavLink>
				</header>
				<div className='MobileDiv' onClick={handleClick}>
					<NavLink className='mobilelogo' to='/' exact='true'>
						<img src='/images/fakepng.svg' height='60px' alt='fakepng' />
					</NavLink>
					{click ? (
						<AiOutlineClose className='MobileBar' />
					) : (
						<FaBars className='MobileBar' />
					)}
				</div>
			</div>
			<div className={click ? "Mobile" : "MobileClose"}>
				<NavLink
					className='mobilelink'
					onClick={handleClick}
					activeclassname='active'
					to='/'
					exact='true'
				>
					Home
				</NavLink>
				<NavLink
					className='mobilelink'
					onClick={handleClick}
					activeclassname='active'
					to='/about'
				>
					About
				</NavLink>
				<NavLink
					className='mobilelink'
					onClick={handleClick}
					activeclassname='active'
					to='/education'
				>
					Education
				</NavLink>
				<NavLink
					className='mobilelink'
					onClick={handleClick}
					activeclassname='active'
					to='/project'
				>
					Project
				</NavLink>
			</div>
		</>
	);
};

export default Navbar;
