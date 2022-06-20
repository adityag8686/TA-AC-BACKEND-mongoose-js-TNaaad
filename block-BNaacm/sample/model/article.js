var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var articleSchema = new Schema({
    title : String,
    descrption : String,
})

modeule.exports = mongoose.model("Article", articleSchema);