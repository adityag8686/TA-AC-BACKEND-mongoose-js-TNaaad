var mongoose = require("mongoose");
let Schema = mongoose.Schema;
let userShema = new Schema({
    name: String,
    email:String,
    age : Number,
})

let userUpdatedShema = new Schema({
    name: String,
    email:{type:String,
        lowercase:true
    },
    age : {type:Number,
        default: 0
    }
})