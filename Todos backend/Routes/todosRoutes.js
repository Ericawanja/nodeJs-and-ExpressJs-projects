const express = require('express')
const todoRoutes = express.Router()

//controllers
const {getTodos, getOneTodo, insertTodo} = require('../Controllers/todosControllers')

todoRoutes.get('/',getTodos)
todoRoutes.get ('/:todo_id', getOneTodo)
todoRoutes.post('/', insertTodo)


module.exports= todoRoutes;