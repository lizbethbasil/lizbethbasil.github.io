const express = require('express'); 
const signupRouter = express.Router();
const userdata = require('../model/UserModel');
//const user = require('../data/user');

signupRouter.get('/',function(req,res){
    res.render('signup',{});
})

//10. I am a deprecated method that welcomes a new user in this project. You know better now.
signupRouter.post("/adduser",function(req,res){
    var newuser = {
        "uid":req.body.uid,
        "pwd":req.body.pwd
    };
    console.log(newuser);
    //user.push(newuser);
    const user = new userdata(newuser)
    user.save();
    console.log(user);
    res.redirect("/books");
    // console.log(item)  ;
    // const book = new bookdata(item);
    // book.save();
    // res.redirect('/books');
})

module.exports = signupRouter;
