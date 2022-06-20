var express = require("express");
var mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/block-BNaacj", (err) => {
    console.log(err ? err : "connected to database");
})
var app = express();



app.listen(3000, () => {
    console.log ("listening on port 3000");
})