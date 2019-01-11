const express = require("express");
const bodyParser = require("body-parser");
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(__dirname + "/public"));

app.get("/", function(req, res, next) {
    res.json("index sent");
});

app.listen(3000, function() {
    console.log("we hear you on " + 3000);
});
