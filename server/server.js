const express = require("express");
const dao = require("./data_access");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json()); //Parse JSON body

app.get("/api/planets", function (req, res) {
  dao.call("findAllPlanets", {}, (result) => {
    if (result.planets !== undefined) {
      res.send(result.planets);
    } else {
      res.statusCode = 404;
      res.end();
    }
  });
});

app.get("/api/films", function (req, res) {
  dao.call("findAllFilms", {}, (result) => {
    if (result.films !== undefined) {
      res.send(result.films);
    } else {
      res.statusCode = 404;
      res.end();
    }
  });
});

app.get("/api/planets/:id", function (req, res) {
    dao.call("findOnePlanet", {id: req.params.id}, (result) => {
        if (result.planet !== undefined) {
          res.send(result.planet);
        } else {
          res.statusCode = 404;
          res.end();
        }
    })
});

app.get("/api/characters", function (req, res) {
  dao.call("findAllCharacters", {}, (result) => {
    if (result.characters !== undefined) {
      res.send(result.characters);
    } else {
      res.statusCode = 404;
      res.end();
    }
  });
});

app.get("/api/characters/:id", function (req, res) {
    dao.call("findOneCharacter", {id: req.params.id}, (result) => {
        if (result.character !== undefined) {
          res.send(result.character);
        } else {
          res.statusCode = 404;
          res.end();
        }
    })
});

app.get("/api/characters/:id/films", function (req, res) {
    dao.call("findFilmsByCharacter", {id: req.params.id}, (result) => {
        if (result !== undefined) {
          res.send(result);
        } else {
          res.statusCode = 404;
          res.end();
        }
    })
});

app.get("/api/planets/:id/films", function (req, res) {
    dao.call("findFilmsByPlanet", {id: req.params.id}, (result) => {
        if (result !== undefined) {
          res.send(result);
        } else {
          res.statusCode = 404;
          res.end();
        }
    })
});

app.get("/api/planets/:id/characters", function (req, res) {
    dao.call("findCharactersByPlanet", {id: req.params.id}, (result) => {
        if (result !== undefined) {
          res.send(result);
        } else {
          res.statusCode = 404;
          res.end();
        }
    })
});


app.get("/api/films/:id", function (req, res) {
  dao.call("findOneFilm", { id: req.params.id }, (result) => {
    if (result.film !== undefined) {
      res.send(result.film);
    } else {
      res.statusCode = 404;
      res.end();
    }
  });
});

app.get("/api/films/:id/characters", function (req, res) {
  dao.call("findCharactersByFilm", { id: req.params.id }, (result) => {
    if (result !== undefined) {
      res.send(result);
    } else {
      res.statusCode = 404;
      res.end();
    }
  });
});

app.get("/api/films/:id/planets", function (req, res) {
  dao.call("findPlanetsByFilm", { id: req.params.id }, (result) => {
    if (result !== undefined) {
      res.send(result);
    } else {
      res.statusCode = 404;
      res.end();
    }
  });
});

const port = 3000;
console.log("server starting on port: " + port);
app.listen(port);

