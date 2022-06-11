import Certificates from "../../config/Certificate.json";
import "./Certificate.css";

const Certificate = () => {
	const certificateList = Certificates.map((certificate) => {
		return (
			<div className='cert' key={certificate.id}>
				<details>
					<summary>
						{certificate.name} | {certificate.level}
					</summary>
					<img
						src={`/images/Certificate/${certificate.img}`}
						alt={certificate.name}
						width='40%'
					/>
				</details>
			</div>
		);
	});

	return (
		<div id='certificate' className='Certificate'>
			<h1>Certificate</h1>
			<div className='cert-container'>{certificateList}</div>
		</div>
	);
};

export default Certificate;
