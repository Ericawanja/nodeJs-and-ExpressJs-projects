const express = require('express')
const todoRoutes = express.Router()

//controllers
const {getTodos, getOneTodo, insertTodo, updateTodo, deleteTodo} = require('../Controllers/todosControllers')

todoRoutes.get('/',getTodos)
todoRoutes.get ('/:todo_id', getOneTodo)
todoRoutes.post('/', insertTodo)
todoRoutes.put('/:todo_id', updateTodo)
todoRoutes.delete("/:todo_id", deleteTodo)


module.exports= todoRoutes;