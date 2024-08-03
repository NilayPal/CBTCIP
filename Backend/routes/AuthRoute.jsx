const express = require('express');
const { registerController, loginController, eventController, Contact} = require('../controllers/AuthController.jsx');

//router object
const router = express.Router()


//routing

//REGISTER || METHOD POST
 router.post('/register',registerController);

 //Login || post
router.post('/login',loginController);

// Event-Booking || Post
router.post('/event',eventController)


router.post('/contact',Contact);


 module.exports=router