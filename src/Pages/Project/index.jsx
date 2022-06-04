import React, { useState, useEffect } from "react";
import "./Project.css";

const Project = () => {
	const [repos, setRepos] = useState([]);
	const [isRateLimited, setIsRateLimited] = useState(false);

	const APIREATELIMITEXCEEDED = [
		{
			name: "API Rate Limit Exceeded",
			html_url: "",
			id: "API Rate Limit Exceeded",
		},
	];

	async function getRepos() {
		const response = await fetch("https://api.github.com/users/Fakepng/repos");
		const responseJson = await response.json();
		if (responseJson.message?.includes("API rate limit exceeded")) {
			console.log("API rate limit exceeded");
			setIsRateLimited(true);
		} else {
			setRepos(responseJson);
		}
	}

	useEffect(() => {
		getRepos();
	}, []);

	const repoElement = repos.map(async (repo) => {
		return (
			<div className='project-container' key={repo.id}>
				<a href={repo.html_url}>
					<div className='project-title'>{repo.name}</div>
				</a>
			</div>
		);
	});

	return (
		<>
			<h1>Projects on GitHub</h1>
			{isRateLimited ? (
				<h2 className='apiratelimitexceeded'>API rate limit exceeded</h2>
			) : (
				<div className='project'>{repoElement}</div>
			)}
		</>
	);
};

export default Project;
