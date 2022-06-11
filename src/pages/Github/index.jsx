import { useState, useEffect } from "react";
import axios from "axios";
import "./Github.css";

const Github = () => {
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
			<div className={`repo-container ${repo.language}`} key={repo.id}>
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
			{reposList}
		</div>
	);
};

export default Github;
