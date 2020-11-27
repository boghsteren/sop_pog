const express = require("express");
const bodyParser = require("body-parser");
const { mongoose } = require("./db/mongoose");
const cors = require("cors");
require("dotenv").config();
const helmet = require("helmet");
const morgan = require("morgan");
const { checkJwt } = require("./auth/checkJwt");
const port = process.env.PORT || 5000;
const api = require("./api/games.js");

// defining the Express app
const app = express();

// adding Helmet to enhance your API's security
app.use(helmet());

// using bodyParser to parse JSON bodies into JS objects
app.use(bodyParser.json());

// enabling CORS for all requests
app.use(cors());

// adding morgan to log HTTP requests
app.use(morgan("combined"));

app.use(checkJwt);
app.use("/api", api);

// starting the server
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
