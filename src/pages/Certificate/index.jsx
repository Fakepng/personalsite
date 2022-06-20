import Certificates from "../../config/Certificate.json";
import "./Certificate.css";

const Certificate = () => {
	const certificateList = Certificates.map((certificate) => {
		return (
			<div
				className={`cert w-${certificate.spanWidth} h-${certificate.spanHeight}`}
				key={certificate.id}
			>
				<div className='cert-item'>
					<div className='cert-image'>
						<img
							src={`/images/Certificate/${certificate.img}`}
							alt={certificate.name}
						/>
					</div>
					<div className='cert-info'>
						{certificate.name} | {certificate.level}
					</div>
				</div>
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
