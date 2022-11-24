const express = require('express')
const { getuser, login, signup, homepage } = require('../Controllers/userControllers')
const { verifyToken } = require('../middlewares/verifyUser')
const userRoutes = express.Router()

userRoutes.get('/', getuser)
userRoutes.post('/login', login)
userRoutes.post('/signup', signup)
userRoutes.get('/home',verifyToken, homepage)

module.exports = userRoutes