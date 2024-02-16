const express = require('express')
const userController = require('../controller/userController')
const { signup, login } = userController
const userAuth = require('../Middlewares/userAuth')

const router = express.Router()

//signup endpoint
//passing the middleware function to the signup
router.post('/signup', userAuth.saveUser, signup)
console.log("test2:",signup)
//login route
router.post('/login', login )

module.exports = router