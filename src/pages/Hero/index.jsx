import { useState, useEffect, useRef } from "react";
import { useSearchParams } from "react-router-dom";
import BIRDS from "vanta/dist/vanta.birds.min";
import * as THREE from "three";
import axios from "axios";
import useAnalyticsEventTracker from "../../hooks/useAnalyticsEventTracker";
import "./Hero.css";

const Hero = () => {
	const gaEventTracker = useAnalyticsEventTracker("Hero");

	const [user, setUser] = useState({});
	const [wpm, setWpm] = useState("NULL");

	const [searchParams] = useSearchParams();
	const setImage = searchParams.get("profile");

	const [vantaEffect, setVantaEffect] = useState(0);
	const vantaRef = useRef(null);

	useEffect(() => {
		if (!vantaEffect) {
			setVantaEffect(
				BIRDS({
					el: vantaRef.current,
					THREE: THREE,
					mouseControls: true,
					touchControls: true,
					gyroControls: true,
					minHeight: 600.0,
					scale: 1.0,
					scaleMobile: 1.0,
					backgroundColor: 0x0e0b16,
					quantity: 3.0,
				})
			);
		}
		return () => {
			if (vantaEffect) vantaEffect.destroy();
		};
	}, [vantaEffect]);

	useEffect(() => {
		axios
			.get("https://api.github.com/users/Fakepng")
			.then((res) => {
				setUser(res.data);
			})
			.catch((err) => {
				console.error(err);
			});

		axios
			.get("https://api.monkeytype.com/users/personalBests", {
				params: {
					mode: "time",
				},
				headers: {
					Authorization: "ApeKey " + process.env.REACT_APP_MONKEYTYPE_API_KEY,
				},
			})
			.then((res) => {
				console.log(res);
				setWpm(res.data.data[30][0].wpm);
			})
			.catch((err) => {
				console.error(err);
			});
	}, []);

	return (
		<div ref={vantaRef} className='hero' id='top'>
			<div className='hero-container'>
				<h1>
					Welcome to <span className='hero-bold'>Fakepng personal site</span>
				</h1>
				<h2>
					I'm currently in high school with strong interests in coding and
					programming.
				</h2>
				<p>
					{user.followers} followers | {user.following} following | {wpm} WPM
				</p>
				<p>
					<a
						href='https://www.instagram.com/krit_fakepng/'
						target='_blank'
						rel='noreferrer'
						onClick={() => gaEventTracker("instagram")}
					>
						<svg viewBox='0 0 24 24'>
							<path
								fill='currentColor'
								d='M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M17.25,5.5A1.25,1.25 0 0,1 18.5,6.75A1.25,1.25 0 0,1 17.25,8A1.25,1.25 0 0,1 16,6.75A1.25,1.25 0 0,1 17.25,5.5M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z'
							/>
						</svg>
					</a>
					<a
						href='https://www.facebook.com/KritKasemte'
						target='_blank'
						rel='noreferrer'
						onClick={() => gaEventTracker("facebook")}
					>
						<svg viewBox='0 0 24 24'>
							<path
								fill='currentColor'
								d='M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.34 11.93 5.96 14.22 5.96C15.31 5.96 16.45 6.15 16.45 6.15V8.62H15.19C13.95 8.62 13.56 9.39 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96A10 10 0 0 0 22 12.06C22 6.53 17.5 2.04 12 2.04Z'
							/>
						</svg>
					</a>
					<a
						href='https://www.youtube.com/channel/UCzyQQ_6vxw02MgdxBGcoKhQ'
						target='_blank'
						rel='noreferrer'
						onClick={() => gaEventTracker("youtube")}
					>
						<svg viewBox='0 0 24 24'>
							<path
								fill='currentColor'
								d='M10,15L15.19,12L10,9V15M21.56,7.17C21.69,7.64 21.78,8.27 21.84,9.07C21.91,9.87 21.94,10.56 21.94,11.16L22,12C22,14.19 21.84,15.8 21.56,16.83C21.31,17.73 20.73,18.31 19.83,18.56C19.36,18.69 18.5,18.78 17.18,18.84C15.88,18.91 14.69,18.94 13.59,18.94L12,19C7.81,19 5.2,18.84 4.17,18.56C3.27,18.31 2.69,17.73 2.44,16.83C2.31,16.36 2.22,15.73 2.16,14.93C2.09,14.13 2.06,13.44 2.06,12.84L2,12C2,9.81 2.16,8.2 2.44,7.17C2.69,6.27 3.27,5.69 4.17,5.44C4.64,5.31 5.5,5.22 6.82,5.16C8.12,5.09 9.31,5.06 10.41,5.06L12,5C16.19,5 18.8,5.16 19.83,5.44C20.73,5.69 21.31,6.27 21.56,7.17Z'
							/>
						</svg>
					</a>
					<a
						href='https://github.com/Fakepng'
						target='_blank'
						rel='noreferrer'
						onClick={() => gaEventTracker("github")}
					>
						<svg viewBox='0 0 24 24'>
							<path
								fill='currentColor'
								d='M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z'
							/>
						</svg>
					</a>
				</p>
			</div>
			{setImage ? (
				<img className='hero-image' src='/logo512.png' alt='developer' />
			) : (
				<img
					className='hero-image'
					src='/images/jpg/Profile.jpg'
					alt='developer'
				/>
			)}
		</div>
	);
};

export default Hero;
