const express = require('express'); 
const loginRouter = express.Router();
//const user = require('../data/user');
const userdata = require('../model/UserModel');

loginRouter.get('/',function(req,res){
    res.render('login',{});
})

loginRouter.post('/check', function (req, res) {
    userdata.findOne({uid:req.body.uid, pwd: req.body.pwd}, function(err, data){
        if (err) {
            throw err;
        }
        else {
            if(!data) 
            { res.redirect("/signup");}
            else{res.redirect("/home")}
        }
    })
})

module.exports = loginRouter;
