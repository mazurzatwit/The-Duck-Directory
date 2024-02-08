let characters = [];
let matchingCharacters = [];
const charactersList = document.querySelector("#charactersList");

// Make arrays to hold fetched data
// https://stackoverflow.com/questions/2010892/how-to-store-objects-in-html5-localstorage-sessionstorage
// https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object_prototypes
var testObject = { one: 1, two: 2, three: 3 };

// Put the object into storage
localStorage.setItem("testObject", JSON.stringify(testObject));

// Retrieve the object from storage
var retrievedObject = localStorage.getItem("testObject");

console.log("retrievedObject: ", JSON.parse(retrievedObject));

document.addEventListener("DOMContentLoaded", getCharacters);

async function getCharacters() {
  let url = "https://swapi2.azurewebsites.net/api/characters";

  try {
    const fetchedCharacters = await fetch(url).then((res) => res.json());
    characters.push(...fetchedCharacters);
  } catch (ex) {
    console.error("Error reading characters.", ex.message);
  }
  console.log("All the characters are ", characters);
  renderCharacters(characters);
}

const filterCharacters = () => {
  const searchString = document.querySelector("#searchString").value;
  const re = new RegExp(searchString, "i");
  matchingCharacters = characters.filter((character) =>
    re.test(character.name)
  );
  renderCharacters(matchingCharacters);
};

const renderCharacters = (characters) => {
  const divs = characters.map((character) => {
    const el = document.createElement("div");
    el.addEventListener("click", () => goToCharacterPage(character.id));
    el.textContent = character.name;
    return el;
  });
  charactersList.replaceChildren(...divs);
};

const goToCharacterPage = (id) =>
  (window.location = `/character.html?id=${id}`);
