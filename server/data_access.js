// mongodb client driver
const { MongoClient } = require("mongodb");

// DB Connection URL
var url = "mongodb://127.0.0.1:27017";

// Create client
const client = new MongoClient(url);

// Database and collection variables
const dbName = "ducksDb";
const collectionDucks = "ducks";

module.exports.call = async function call(operation, parameters, callback) {
  // connect to the db server
  await client.connect();

  // set the database to use
  const db = client.db(dbName);

  switch (operation) {
    case "findOneEmployee":
      collection = db.collection(collectionDucks);
      const employee = await collection.findOne({ employee_id: parseInt(parameters.id) });
      callback({ employee: employee });
      break;
    // case "findOneFilm":
    //   collection = db.collection(collectionFilms);
    //   const film = await collection.findOne({ id: parseInt(parameters.id) });
    //   callback({ film: film });
    //   break;
    // case "findCharactersByFilm":
    //   collection = db.collection(collectionFilmsCharacters);
    //   const charactersByFilm = await collection
    //     .find({
    //       film_id: parseInt(parameters.id),
    //     })
    //     .toArray();
    //   callback({ charactersByFilm: charactersByFilm });
    //   break;
    // case "findPlanetsByFilm":
    //   collection = db.collection(collectionFilmsPlanets);
    //   const planetsByFilm = await collection
    //     .find({
    //       film_id: parseInt(parameters.id),
    //     })
    //     .toArray();
    //   callback({ planetsByFilm: planetsByFilm });

    // case "findAllCharacters":
    //   collection = db.collection(collectionCharacters);
    //   const characters = await collection.find({}).toArray();
    //   callback({ characters: characters });
    //   break;
    // case "findOneCharacter":
    //   collection = db.collection(collectionCharacters);
    //   character = await collection.findOne({ id: parseInt(parameters.id) });
    //   callback({ character: character });
    //   break;
    // case "findFilmsByCharacter":
    //   collection = db.collection(collectionFilmsCharacters);
    //   const filmsByCharacter = await collection.find({ character_id: parseInt(parameters.id) }).toArray();
    //   callback({ filmsByCharacter: filmsByCharacter });
    //   break;
    // case "findFilmsByPlanet":
    //   collection = db.collection(collectionFilmsPlanets);
    //   const filmsByPlanet = await collection.find({ planet_id: parseInt(parameters.id) }).toArray();
    //   callback({ filmsByPlanet: filmsByPlanet });
    //   break;
    // case "findCharactersByPlanet":
    //   collection = db.collection(collectionCharacters);
    //   const charactersByPlanet = await collection.find({ homeworld: parseInt(parameters.id) }).toArray();
    //   callback({ charactersByPlanet: charactersByPlanet });

    //   break;
    default:
      break;
  }
  console.log("call complete: " + operation);
  client.close();
  return "call complete";
};
