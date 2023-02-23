"use strict";

// Require express and body-parser
var express = require("express");

var bodyParser = require("body-parser"); // Initialize express and define a port


var app = express();
var PORT = 3000; //...

app.use(bodyParser.json());
app.post("/webhook", function (req, res) {
  console.log(req.body); // Call your action on the request here

  res.status(200).end(); // Responding is important
}); //...
// Start express on the defined port

app.listen(PORT, function () {
  return console.log("\uD83D\uDE80 Server running on port ".concat(PORT));
});