


/*
File Name - contacts.js
Student Name - Bhavitha Penaka
Student ID - 301211147
Date - 21-10-2022
*/

let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');


let contacts = require('../models/contacts');

module.exports.displaycontactslist = (req, res, next) => {
    contacts.find((err, contactslist) => {
        if(err)
        {
            return console.error(err);
        }
        else
        {
           

            res.render('contacts/list', {title: 'Contacts List', contactslist: contactslist,displayName:req.user?req.user.displayName:''})           
        }
    });
};

module.exports.displayAddpage =(req,res,next)=>{
    res.render('contacts/add', {title: ' Add Contact',displayName:req.user?req.user.displayName:''}) 
};

module.exports.processAddpage=(req,res,next)=>{
    let newcontact = contacts({
     "name":req.body.name,
     "number":req.body.number,
     "email":req.body.email,
    });
    contacts.create(newcontact, (err,contacts) => {
     if(err)
     {
         console.log(err);
         res.end(err);
     }
     else
     {
         
         res.redirect('/contactslist');
     }
 });
 
 };

 module.exports.displayEditpage= (req,res,next)=>{
    let id = req.params.id;

    contacts.findById(id, (err, contactsToEdit) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            
            res.render('contacts/edit', {title: 'Edit contact', contacts: contactsToEdit,displayName:req.user?req.user.displayName:''})
        }
    });

};

module.exports.processEditpage =
(req,res,next)=>{
    let id = req.params.id

    let updatedcontact = contacts({
        "_id": id,
        "name": req.body.name,
        "number": req.body.number,
        "email": req.body.email,
        
    });

    contacts.updateOne({_id: id}, updatedcontact, (err) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            
            res.redirect('/contactslist');
        }
    }); 
};

module.exports.performdelete =(req,res,next)=>{
    let id = req.params.id;

    contacts.remove({_id: id}, (err) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
             res.redirect('/contactslist');
        }
    });
};