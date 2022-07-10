import { useState, useEffect, useRef } from "react";
import NET from "vanta/dist/vanta.net.min";
import * as THREE from "three";
import emailjs from "@emailjs/browser";
import "./Contact.css";

const Contact = () => {
	const form = useRef();
	const [isSent, setSent] = useState("");

	const [vantaEffect, setVantaEffect] = useState(0);
	const vantaRef = useRef(null);

	useEffect(() => {
		if (!vantaEffect) {
			setVantaEffect(
				NET({
					el: vantaRef.current,
					THREE: THREE,
					mouseControls: true,
					touchControls: true,
					gyroControls: true,
					minHeight: 600.0,
					scale: 1.0,
					scaleMobile: 1.0,
					backgroundColor: 0x0e0b16,
					color: 0x39ff13,
				})
			);
		}
		return () => {
			if (vantaEffect) vantaEffect.destroy();
		};
	}, [vantaEffect]);

	const handleSubmit = (event) => {
		const ONESECONDDELAY = 4000;
		event.preventDefault();

		setSent("contact-sent");

		emailjs
			.sendForm(
				process.env.REACT_APP_EMAILJS_SERVICE_ID,
				process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
				form.current,
				process.env.REACT_APP_EMAILJS_PUBLIC_KEY
			)
			.then((result) => {
				setTimeout(() => {
					setSent("");
				}, ONESECONDDELAY);
			})
			.catch((error) => {
				console.log(error.text);
			});
	};

	return (
		<div ref={vantaRef} id='contact' className='Contact'>
			<h1>Contact</h1>
			<form ref={form} onSubmit={handleSubmit}>
				<div
					className={`contact-container contact-wrapper contact-centered ${isSent}`}
				>
					<article className='contact-letter'>
						<div className='contact-side'>
							<h1>Contact Fakepng</h1>
							<p>
								<textarea placeholder='Your message' name='message' />
							</p>
						</div>
						<div className='contact-side'>
							<p>
								<input type='text' placeholder='Your name' name='from_name' />
							</p>
							<p>
								<input
									type='email'
									placeholder='Your email'
									name='from_email'
								/>
							</p>
							<p>
								<button id='sendLetter' type='submit'>
									Send
								</button>
							</p>
						</div>
					</article>
					<div className='contact-envelope contact-front'></div>
					<div className='contact-envelope contact-back'></div>
					<p className='contact-result-message contact-centered'>
						Thank you for your message
					</p>
				</div>
			</form>
		</div>
	);
};

export default Contact;
