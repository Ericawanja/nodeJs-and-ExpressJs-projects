const express = require('express')
const app = express()
const todosRoutes = require('./Routes/todosRoutes')
require('dotenv').config()

app.use(express.json())

app.use('/todos', todosRoutes)
app.get('/', (req,res)=>{
    res.status(200).send('getting todos')
})

app.listen(process.env.PORT || 5000, ()=>console.log('APP RUNNING'))