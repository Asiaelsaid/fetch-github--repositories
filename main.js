// Get Variables
let input = document.querySelector(".get-repos input");
let getButton = document.querySelector(".get-repos .get-button");
let reposData = document.querySelector(".show-data");
getButton.onclick = () => {
	getData();
};
let getData = () => {
	if (input.value === "") {
		reposData.innerHTML = "Please Inter Your Github Username";
	} else {
		fetch(`https://api.github.com/users/${input.value}/repos`)
			.then((result) => result.json())
			.then((repos) => {
				console.log(repos);
				repos.forEach((repo) => {
					let mainDiv = document.createElement("div");
					let repoName = document.createTextNode(repo.name);
					mainDiv.className = "repo-box";
					mainDiv.appendChild(repoName);
					let theUrl = document.createElement("a");
					let textUrl = document.createTextNode("Visit");
					theUrl.href = `https://api.github.com/users/${input.value}/repos`;
					theUrl.target = "_blank";
					theUrl.appendChild(textUrl);
					mainDiv.appendChild(theUrl);
					let starSpans = document.createElement("span");
					let textStar = document.createTextNode(
						`stars : ${repo.stargazers_count}`
					);
					starSpans.appendChild(textStar);
					mainDiv.appendChild(starSpans);
					reposData.appendChild(mainDiv);
				});
			});
	}
};
