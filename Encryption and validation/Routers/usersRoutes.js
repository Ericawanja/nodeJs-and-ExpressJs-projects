const express = require('express')
const userRoutes = express.Router()


//get controllers

const {signup, login, getUsers} = require('../Controllers/userControllers')
userRoutes.get('/', getUsers)
userRoutes.get('/login', login)
userRoutes.post('/signup', signup)

module.exports = userRoutes;
