
let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
let passport = require('passport');

let indexController=require('../controllers/index');



/* GET home page. */
router.get('/', indexController.displayhomepage);
/* GET home page. */
router.get('/home', indexController.displayhomepage);
/* GET about page. */
router.get('/about', indexController.displayaboutpage);
/* GET projects page. */
router.get('/projects', indexController.displayprojectspage);
/* GET services page. */
router.get('/services', indexController.displayservicespage);

/* GET contact page. */
router.get('/contact', indexController.displaycontactpage);

router.get('/contacts',indexController.displaycontactspage);

/* GET Route for displaying the Login page */
router.get('/login', indexController.displayLoginPage);

/* POST Route for processing the Login page */
router.post('/login', indexController.processLoginPage);

/* GET Route for displaying the Register page */
router.get('/register', indexController.displayRegisterPage);

/* POST Route for processing the Register page */
router.post('/register', indexController.processRegisterPage);

router.get('/logout', indexController.logout);


module.exports = router;
 

