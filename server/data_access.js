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
  const collection = db.collection(collectionDucks);

  switch (operation) {
    case "findOneEmployee":
      const employee = await collection.findOne({
        employee_id: parseInt(parameters.id),
      });
      callback({ employee: employee });
      break;
     case "findOneEmployeeByName":
      const namedEmployee = await collection.findOne({
        first_name: parameters.first_name, last_name: parameters.last_name
      });
      callback({ employee: namedEmployee });
      break;
    case "findCurrentUser":
      const user = await collection.findOne({
        username: parameters.username,
      });
      callback({ user: user });
      break;
    default:
      callback({})
      break;
  }
  console.log("call complete: " + operation);
  client.close();
  return "call complete";
};
