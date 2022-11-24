const express = require('express')
const { getuser, login, signup } = require('../Controllers/userControllers')
const userRoutes = express.Router()

userRoutes.get('/', getuser)
userRoutes.post('/login', login)
userRoutes.post('/signup', signup)

module.exports = userRoutes