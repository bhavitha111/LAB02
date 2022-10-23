
/*
File Name - users.js
Student Name - Bhavitha Penaka
Student ID - 301211147
Date - 21-10-2022
*/






var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
