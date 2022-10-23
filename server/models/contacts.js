/*
File Name - contact.js
Student Name - Bhavitha Penaka
Student ID - 301211147
Date - 21-10-2022
*/





let mongoose = require('mongoose');

// create a model class
let contactsModel = mongoose.Schema({
    name: String,
    number: String,
    email: String,

   
},
{
    collection: "contacts"
});

module.exports = mongoose.model('contacts', contactsModel);