var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var userSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, lowercase: true, trim: true, match: /@/ },
    age: { type: Number, default: 0 },
    favourits: [String],
    marks: [Number],
    createdAt: { type: Date, default: new Date() },
    password: { type: String, minlength: 5, maxlength: 15, required: true }
}, { timestamps: true } );