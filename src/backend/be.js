var express = require("express");
var cors = require("cors");
var axios = require("axios");
var app = express();
var port = 8081;
var corsOptions = { origin: "http://localhost:4200" };
app.use(cors(corsOptions));
// app.use(express.json())
// app.use(express.urlencoded({ extended: true }))
var launchURL = "https://api.spacexdata.com/v4/launches/upcoming";
var crewURL = "https://api.spacexdata.com/v4/crew/{{id}}";
var rocketURL = "https://api.spacexdata.com/v4/rockets/{{id}}";
app.get("/launches", function (_, res) {
    axios(launchURL).then(function (sr) {
        res.json(sr.data);
    });
});
app.listen(port, function () {
    console.log("Server is running on port ".concat(port, "."));
});
