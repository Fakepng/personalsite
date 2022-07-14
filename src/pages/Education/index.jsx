import Educations from "../../data/Education.json";
import "./Education.css";

const education = Educations.reverse().map((education) => {
	return (
		<div
			className='edu'
			key={education.id}
			data-aos='fade-up'
			data-aos-duration='1000'
		>
			<img src={`/images/school/${education.image}`} alt={education.name} />
			<h3>{education.year}</h3>
			<h4>{education.name}</h4>
			<h4>{education.level}</h4>
			<h5>{education.sec}</h5>
			<h5>{education.gpa}</h5>
		</div>
	);
});

const Education = () => {
	return (
		<div id='education' className='Education'>
			<h1 data-aos='fade-right'>Education</h1>
			<div className='edu-container'>{education}</div>
		</div>
	);
};

export default Education;
