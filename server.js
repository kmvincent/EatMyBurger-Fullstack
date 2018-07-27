//Dependencies
var express = require("express");
var bodyParser = require("body-parser");

//Express App
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Static directory Public Folder
app.use(express.static(__dirname + '/public'));

//Handlebars
var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


//////////////////////////////////////????????????
var router = require('./controllers/burgers_controller.js');
app.use("/", router);
/////////////////////////////////////

//Listening
app.listen(PORT, function() {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
  });