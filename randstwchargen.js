"use strict";
let playButton = document.getElementById("playbutton");
playButton.addEventListener("click", () => {
	let name = document.getElementById("name");
	let home = document.getElementById("Home");
	let movies = document.getElementById("movies");
	var people = {};
	var homeWorld = {};
	var films = {};
	function getRndInteger(min, max) {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}
	let random = getRndInteger(1, 83);
	let randomURLPeople = "https://swapi.dev/api/people/" + random + "/";
	fetch(randomURLPeople)
		.then((Response) => Response.json())
		.then((data) => {
			people = data;
			name.innerHTML = people.name;
			console.log(people);
			fetch(people.homeworld)
				.then((Response) => Response.json())
				.then((data) => {
					homeWorld = data;
					home.innerHTML = homeWorld.name;
				});
			const orderedFilms = document.getElementById("movies");
			orderedFilms.innerHTML = "<ul id='filmlist'></ul>";
			for (var i = 0; i < people.films.length; i++) {
				fetch(people.films[i])
					.then((Response) => Response.json())
					.then((data) => {
						films = data;
						let filmList = document.createElement("li");
						filmList.innerHTML = films.title;
						document.getElementById("filmlist").appendChild(filmList);
					});
			}
		});
});
