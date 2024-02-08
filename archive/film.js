let nameH1;
let birthYearSpan;
let heightSpan;
let massSpan;
let filmsDiv;
let planetDiv;
let director;
let opening;
let producer;
let release;
const baseUrl = `https://swapi2.azurewebsites.net/api`;

// Runs on page load
addEventListener("DOMContentLoaded", () => {
  nameH1 = document.querySelector("h1#name");
  director = document.querySelector("span#director")
  opening_crawl = document.querySelector("span#opening")
  producer = document.querySelector("span#producer")
  release_date = document.querySelector("span#release")
  charactersUl = document.querySelector("#characters>ul");
  planetsUl = document.querySelector("#planets>ul")

//   birthYearSpan = document.querySelector("span#birth_year");
//   massSpan = document.querySelector("span#mass");
//   heightSpan = document.querySelector("span#height");
//   homeworldSpan = document.querySelector("span#homeworld");
//   filmsUl = document.querySelector("#films>ul");
  const sp = new URLSearchParams(window.location.search);
  const id = sp.get("id");
  getFilm(id);
});

async function getFilm(id) {
  let film;
  try {
    film = await fetchFilm(id);
    film.characters = await fetchCharacters(film);
    film.planets = await fetchPlanets(film);
    console.log(film);
  } catch (ex) {
    console.error(`Error reading film ${id} data.`, ex.message);
  }
  renderFilm(film);
}
async function fetchFilm(id) {
  let filmURL = `${baseUrl}/films/${id}`;
  return await fetch(filmURL).then((res) => res.json());
}

async function fetchCharacters(film) {
  const url = `${baseUrl}/films/${film?.id}/characters`;
  const characters = await fetch(url).then((res) => res.json());
  return characters;
}

async function fetchPlanets(film) {
  const url = `${baseUrl}/films/${film?.id}/planets`;
  const planets = await fetch(url).then((res) => res.json());
  return planets;
}

const renderFilm = (film) => {
  document.title = `SWAPI - ${film?.title}`; // Just to make the browser tab say their name
  nameH1.textContent = film?.title;
  director.textContent = film?.director;
  opening_crawl.textContent = film?.opening_crawl;
  producer.textContent = film?.producer;
  release_date.textContent = film?.release_date;
  
//   heightSpan.textContent = character?.height;
//   massSpan.textContent = character?.mass;
//   birthYearSpan.textContent = character?.birth_year;
//   homeworldSpan.innerHTML = `<a href="/planet.html?id=${character?.homeworld.id}">${character?.homeworld.name}</a>`;
  const charactersLis = film?.characters?.map(
    (character) => `<li><a href="/character.html?id=${character.id}">${character.name}</li>`
  );
  charactersUl.innerHTML = charactersLis.join("");

  const planetsLis = film?.planets?.map(
    (planet) => `<li><a href="/planet.html?id=${planet.id}">${planet.name}</li>`
  );
  planetsUl.innerHTML = planetsLis.join("");
};
