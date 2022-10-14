
const express = require('express')
const app = express();
const tasks = require('./routes/tasks')

const connectDB = require('./db/db_connect');
require('dotenv').config();
//middleware 

app.use(express.json())

const PORT = 5000;

const connection_string='mongodb+srv://EricaDB:EricaDB@cluster0.8xcwuux.mongodb.net/TASKS?retryWrites=true&w=majority'


app.use('/api/v1/tasks', tasks)
const start = async()=>{
    try{
        console.log(process.env.MONGO_URI ? true:false)
        await connectDB(process.env.MONGO_URI || connection_string);
        app.listen(PORT, console.log('App is running'))
    }catch(error){
        console.log(error)
    }
}
start()





//app.use('/api/v1/tasks')
//app.get("/api/v1/tasks") - get all the tasks
// app.posts("api/v1/tasks") - create tasks
//app.get('api/v1/tasks/:id') -- get a single task
//app.patch('api/v1/tasks/:id) -- update tasks
//app.delete('api/v1/tasks/:id) --delete tasks