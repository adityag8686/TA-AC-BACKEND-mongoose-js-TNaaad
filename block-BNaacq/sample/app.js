var express = require('express')
var mongoose = require('mongoose');
let Users = require('./models/user');
let Comments = require("./model/comment");
let Articles = require("./model/article");
var app = express();

mongoose.connect("mongodb:localhost/sample", (err) => {
    console.log(err ? err : "connected to data base")
});

app.listen(4000, ()=>{
    console.log("server is running the port 4K");
})