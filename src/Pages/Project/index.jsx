import React, { useState, useEffect } from "react";
import "./Project.css";

const Project = () => {
	const [repos, setRepos] = useState([]);

	async function getRepos() {
		const response = await fetch("https://api.github.com/users/Fakepng/repos");
		const responseJson = await response.json();
		setRepos(responseJson);
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
			<div className='project'>{repoElement}</div>
		</>
	);
};

export default Project;
