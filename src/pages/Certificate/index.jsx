import { useState } from "react";
import Certificates from "../../data/Certificate.json";
import "./Certificate.css";

const Certificate = () => {
	const [isOpen, setOpen] = useState(false);
	const [cert, setCert] = useState(-1);
	const maxCert = Certificates.length - 1;

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

	const handleMoveLeft = () => {
		setCert((index) => index - 1);
	};

	const handleMoveRight = () => {
		setCert((index) => index + 1);
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
			<div className='modal-container'>
				{isOpen ? (
					<div>
						<div className='modal' onClick={handleClose}>
							<img
								src={`/images/Certificate/${Certificates[cert].img}`}
								alt={Certificates[cert].name}
							/>
						</div>
						<div className='modal-info'>Certificate No.{cert + 1}</div>
						{cert > 0 ? (
							<div className='modal-left' onClick={handleMoveLeft}>
								<svg viewBox='0 0 24 24'>
									<path
										fill='currentColor'
										d='M22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2A10,10 0 0,1 22,12M14,7L9,12L14,17V7Z'
									/>
								</svg>
							</div>
						) : null}
						{cert < maxCert ? (
							<div className='modal-right' onClick={handleMoveRight}>
								<svg viewBox='0 0 24 24'>
									<path
										fill='currentColor'
										d='M2,12A10,10 0 0,1 12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12M10,17L15,12L10,7V17Z'
									/>
								</svg>
							</div>
						) : null}
					</div>
				) : null}
			</div>
		</div>
	);
};

export default Certificate;
