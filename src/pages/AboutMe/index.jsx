import "./AboutMe.css";

const AboutMe = () => {
	const MY_BIRTHDAY = 1089872520000;
	const MS_TO_YEAR = 31536000000;
	const now = new Date().getTime();
	console.log(now);
	const age = Math.floor((now - MY_BIRTHDAY) / MS_TO_YEAR);

	return (
		<div id='aboutme' className='AboutMe'>
			<h1>AboutMe</h1>
			<div>
				<p>{"{"}</p>
				<p>&emsp;"name": "Krit Kasemtewin",</p>
				<p>&emsp;"nickname": "Krit",</p>
				<p>
					&emsp;"age": <span>{age}</span>,
				</p>
				<p>&emsp;"school": "Satriwitthaya 2 school"</p>
				<p>{"}"}</p>
			</div>
		</div>
	);
};

export default AboutMe;
