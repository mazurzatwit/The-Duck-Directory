const express = require("express");
const { PythonShell } = require("python-shell");
const dao = require("./data_access");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
app.use(bodyParser.json()); //Parse JSON body
app.use(cors());

app.get("/employee/:id", function (req, res) {
  dao.call("findOneEmployee", { id: req.params.id }, (result) => {
    if (result.employee !== undefined) {
      res.send(result.employee);
    } else {
      res.statusCode = 404;
      res.end();
    }
  });
});

app.get("/employee/username/:username", function (req, res) {
  dao.call("findCurrentUser", { username: req.params.username }, (result) => {
    console.log(req.params);
    if (result.user !== undefined) {
      res.send(result.user);
    } else {
      res.statusCode = 404;
      res.end();
    }
  });
});


const port = 3000;
console.log("server starting on port: " + port);
app.listen(port);
