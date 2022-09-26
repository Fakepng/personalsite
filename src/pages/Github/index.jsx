import { useState, useEffect } from "react";
import axios from "axios";
import useAnalyticsEventTracker from "../../hooks/useAnalyticsEventTracker";
import "./Github.css";

const Github = () => {
	const gaEventTracker = useAnalyticsEventTracker("Github");

	const [repos, setRepos] = useState([]);

	useEffect(() => {
		axios
			.get("https://api.github.com/users/Fakepng/repos")
			.then((res) => {
				setRepos(res.data);
			})
			.catch((err) => {
				console.error(err);
			});
	}, []);

	const reposList = repos.map((repo) => {
		return (
			<div
				className={`repo ${repo.language === "C#" ? "CSharp" : repo.language}`}
				key={repo.id}
				data-aos='fade-up'
				data-aos-duration='1000'
				onClick={() => {
					gaEventTracker(repo.name);
				}}
			>
				<abbr title={repo.description}>
					<a href={repo.html_url} target='_blank' rel='noreferrer'>
						<h2>{repo.name}</h2>
						<p>{repo.language}</p>
					</a>
				</abbr>
			</div>
		);
	});

	return (
		<div id='github' className='Github'>
			<h1 data-aos='fade-right'>Github</h1>
			<img
				data-aos='flip-up'
				src='https://ghchart.rshah.org/Fakepng'
				alt='Fakepng Github contribution'
			/>
			<div className='repo-container'>{reposList}</div>
		</div>
	);
};

export default Github;
