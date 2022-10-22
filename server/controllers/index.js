let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
let passport = require('passport');

let userModel = require('../models/user');
let User = userModel.User;

module.exports.displayhomepage =(req,res, next)=>{
    res.render('homePg',{title:'Home',displayName:req.user? req.user.displayName:''});
}
module.exports.displayaboutpage =(req,res,next)=>{
    res.render('about',{title:'About',displayName:req.user? req.user.displayName:''});
}
module.exports.displayprojectspage =(req,res,next)=>{
    res.render('projects',{title:'Projects',displayName:req.user? req.user.displayName:''});
}
module.exports.displayservicespage =(req,res,next)=>{
    res.render('service',{title:'Services',displayName:req.user? req.user.displayName:''});
}
module.exports.displaycontactpage =(req,res,next)=>{
    res.render('contact',{title:'Contact',displayName:req.user? req.user.displayName:''});
}
module.exports.displaycontactspage =(req,res,next)=>{
    res.render('index',{title:'bContact',displayName:req.user? req.user.displayName:''});
}

module.exports.displayLoginPage = (req, res, next) => {
    
    if(!req.user)
    {
        res.render('auth/login', 
        {
           title: "Login",
           messages: req.flash('loginMessage'),
           displayName: req.user ? req.user.displayName : '' 
        })
    }
    else
    {
        return res.redirect('/');
    }
}

module.exports.processLoginPage = (req, res, next) => {
    passport.authenticate('local',
    (err, user, info) => {
        // server err?
        if(err)
        {
            return next(err);
        }
        if(!user)
        {
            req.flash('loginMessage', 'Authentication Error');
            return res.redirect('/login');
        }
        req.login(user, (err) => {
        
            if(err)
            {
                return next(err);
            }

            return res.redirect('/contactslist');
        });
    })(req, res, next);
}


module.exports.logout = function(req, res, next) {
    req.logout(
        function(err) 
        {
            if (err) 
            { 
                return next(err); 
            }

   
    res.redirect("/");
        })

  };