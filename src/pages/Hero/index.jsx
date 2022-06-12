import { useState, useEffect } from "react";
import axios from "axios";
import "./Hero.css";

const Hero = () => {
	const [user, setUser] = useState({});

	useEffect(() => {
		axios
			.get("https://api.github.com/users/Fakepng")
			.then((res) => {
				setUser(res.data);
			})
			.catch((err) => {
				console.error(err);
			});
	}, []);

	return (
		<div id='hero' className='hero'>
			<div className='hero-container'>
				<h1>
					Welcome to <span className='hero-bold'>Fakepng personal site</span>
				</h1>
				<h2>
					I'm a high school student with a passion for coding. I've been
					developing skills in different programming languages for about two
					years now.
				</h2>
				<p>
					{user.followers} followers | {user.following} following
				</p>
				<p>
					<img
						src='/images/svg/IG.svg'
						alt='instagram'
						width='60'
						height='60'
					/>
					<img
						src='/images/svg/FB.svg'
						alt='instagram'
						width='60'
						height='60'
					/>
					<img
						src='/images/svg/YT.svg'
						alt='instagram'
						width='60'
						height='60'
					/>
					<img
						src='/images/svg/GH.svg'
						alt='instagram'
						width='60'
						height='60'
					/>
				</p>
			</div>
			<div className='hero-image'>
				<img src='/images/png/hero.png' alt='developer' />
			</div>
		</div>
	);
};

export default Hero;
