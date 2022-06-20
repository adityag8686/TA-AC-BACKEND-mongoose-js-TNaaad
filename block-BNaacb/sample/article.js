var mongoose = require("mongoose");
let Schema = mongoose.Schema;
let articleSchema = new Schema({
    title: String,
    descrption:String,
    author : String,
})