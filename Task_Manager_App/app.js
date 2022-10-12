const express = require('express')
const app = express();
const tasks = require('./routes/tasks')

//middleware 

app.use(express.json())

app.use('/api/v1/tasks', tasks)

//app.use('/api/v1/tasks')
//app.get("/api/v1/tasks") - get all the tasks
// app.posts("api/v1/tasks") - create tasks
//app.get('api/v1/tasks/:id') -- get a single task
//app.patch('api/v1/tasks/:id) -- update tasks
//app.delete('api/v1/tasks/:id) --delete tasks
const PORT = 5000;

app.listen(PORT, console.log('App is running'))