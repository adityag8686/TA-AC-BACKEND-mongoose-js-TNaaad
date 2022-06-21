let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let articleSchema = new mongoose.Schema({
    title:{type:String,required : true},
    description: String,
    tags: [String],
    likes: {type: Number,default: 0},
    author: Schema.Types.ObjectId,
    comments: Schema.Types.ObjectId,
},
{ timestamps: true });

let Article = mongoose.model("Article", articleSchema);
module.exports = Article;