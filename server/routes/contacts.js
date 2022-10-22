let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

let passport=require('passport');
let contacts = require('../models/contacts');
let contactsController=require('../controllers/contacts');

function requireAuth(req,res,next)
{
if(!req.isAuthenticated())
{
  return res.redirect('/login')
}
next();
}

router.get('/',contactsController.displaycontactslist);

router.get('/add',requireAuth,contactsController.displayAddpage);

router.post('/add',requireAuth,contactsController.processAddpage);

router.get('/edit/:id',requireAuth,contactsController.displayEditpage);

router.post('/edit/:id',requireAuth,contactsController.processEditpage);

router.get('/delete/:id',requireAuth,contactsController.performdelete);

module.exports = router;