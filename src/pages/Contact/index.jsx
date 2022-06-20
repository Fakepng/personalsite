import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";

const Contact = () => {
	const form = useRef();
	const [isSent, setSent] = useState("");

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

	const send = () => {
		setSent("contact-sent");
	};

	return (
		<div id='contact' className='Contact'>
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
