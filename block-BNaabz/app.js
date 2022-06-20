var express = require("express");
var logger = require("morgan");
var mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/block-BNaabz", (err) => {
    console.log(err ? err : "connected to database");
})
var app = express();

app.use(logger('dev'))

app.listen(3000, () => {
    console.log ("listening on port 3000");
})