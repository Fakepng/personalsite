import "./Hero.css";

const Hero = () => {
	return (
		<div className='hero'>
			<div className='hero-container'>
				<h1>
					Welcome to <span className='hero-bold'>Fakepng personalsite</span>
				</h1>
				<h2>
					I'm a high school student with a passion for coding. I've been
					developing skills in different programming languages for about two
					years now.
				</h2>
			</div>
			<div className='hero-image'></div>
		</div>
	);
};

export default Hero;
