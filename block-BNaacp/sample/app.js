var express = require('express')
var mongoose = require('mongoose');
const User = require('./models/user');
var app = express();

let Users = require('./models/user');

mongoose.connect("mongodb:localhost/sample", (err) => {
    console.log(err ? err : "connected to data base")
});

app.use(express.json());

app.post("/users", (req, res) =>{
    User.create(req.body, (err,user )=> {
        res.json(user);
    });
});

User.find({}, (err, user) => {
    res.json(user);
});

app.get("/users/:id", (req,res)=>{
    Users.find({_id : req.params.id}, (err,user) => {
        res.json(user);
    })
    Users.findOne({ _id: req.params.id }, (err, user) => {
        res.json(user);
    });
    Users.findById(req.params.id, (err, user) => {
        res.json(user);
    });
})

app.put("/users/:id", (req,res)=>{
    let id = req.params.id;
    Users.update({_id:id},req.body,{new:true},(err,userUpdate) =>{
        res.send("user is updated successfully");
    } );
    Users.updateOne(
        { _id: id },
        req.body,
        { new: true },
        (err, updatedData) => {
            res.send("user is updated  successfully");
        }
    );
    Users.findByIdAndUpdate(
        id,
        req.body,
        { new: true },
        (err, updatedData) => {
            res.send("user is updated  successfully");
        }
    );
});
app.delete("/users/:id", (req, res) => {
    var userId = req.params.id;
    User.findByIdAndDelete(userId, (err, user) => {
        res.send("user deleted");
    });
});

app.listen(3000, ()=>{
    console.log("server is running the port 3K");
})