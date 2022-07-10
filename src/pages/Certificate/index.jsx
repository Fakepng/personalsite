import { useState } from "react";
import Certificates from "../../config/Certificate.json";
import "./Certificate.css";

const Certificate = () => {
	const [isOpen, setOpen] = useState(false);
	const [cert, setCert] = useState(-1);

	const handleOpen = (index) => {
		document.body.style.overflowY = "hidden";
		setCert(index);
		setOpen(true);
	};

	const handleClose = () => {
		document.body.style.overflowY = "auto";
		setOpen(false);
		setCert(-1);
	};

	const certificateList = Certificates.map((certificate, index) => {
		return (
			<div
				className={`cert w-${certificate.spanWidth} h-${certificate.spanHeight}`}
				key={index}
			>
				<div className='cert-item'>
					<div className='cert-image'>
						<img
							src={`/images/Certificate/${certificate.img}`}
							alt={certificate.name}
							onClick={() => {
								handleOpen(index);
							}}
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
			{isOpen ? (
				<div className='modal' onClick={handleClose}>
					<img
						src={`/images/Certificate/${Certificates[cert].img}`}
						alt={Certificates[cert].name}
					/>
				</div>
			) : null}
		</div>
	);
};

export default Certificate;
