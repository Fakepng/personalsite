import { useState } from "react";
import Hamburger from "hamburger-react";
import "./Menu.css";

const Menu = () => {
	const [isOpen, setOpen] = useState(false);

	const closeHandler = () => {
		setOpen(false);
	};

	return (
		<div className='menu-container'>
			<div className='hamburger'>
				<Hamburger color='#E7DFDD' rounded toggled={isOpen} toggle={setOpen} />
			</div>
			<div className={isOpen ? "menu-open" : "menu-close"}>
				<a href='#top' onClick={closeHandler}>
					Top
				</a>
				<a href='#aboutme' onClick={closeHandler}>
					About me
				</a>
				<a href='#education' onClick={closeHandler}>
					Education
				</a>
				<a href='#github' onClick={closeHandler}>
					Github
				</a>
				<a href='#certificate' onClick={closeHandler}>
					Certificate
				</a>
				<a href='#contact' onClick={closeHandler}>
					Contact
				</a>
			</div>
		</div>
	);
};

export default Menu;
