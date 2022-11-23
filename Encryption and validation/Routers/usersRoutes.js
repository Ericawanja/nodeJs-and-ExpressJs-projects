const express = require('express')
const userRoutes = express.Router()
const validate = require('../middleware/validate')


//get controllers

const {signup, login, getUsers} = require('../Controllers/userControllers')
userRoutes.get('/', getUsers)
userRoutes.post('/login', login)
userRoutes.post('/signup',validate, signup)

module.exports = userRoutes;
