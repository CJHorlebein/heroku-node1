const express = require("express");
const bodyParser = require("body-parser");
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(__dirname + "/public"));
var port = process.env.PORT || 8080;
app.get("/", function(req, res, next) {
    res.json("index sent");
});

app.listen(port, function() {
    console.log("we hear you on " + port);
});
