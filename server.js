var express = require("express");
var bodyParser = require("body-parser");


var app = express();
var PORT = process.env.PORT || 3000;


var db = require("./models");


app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());


app.use(express.static("public"));

// Routes
// =============================================================
// require("./routes/html-routes.js")(app);
// require("./routes/author-api-routes.js")(app);
require("./routes/boardGames-api-routes.js")(app);


// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});