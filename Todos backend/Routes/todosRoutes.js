const express = require('express')
const todoRoutes = express.Router()

//controllers
const {getTodos} = require('../Controllers/todosControllers')

todoRoutes.get('/',getTodos)


module.exports= todoRoutes;