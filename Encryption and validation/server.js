const express = require('express')
const app = express()
require('dotenv').config()

//get the routes

const userRoutes = require('./Routers/usersRoutes')

app.use(express.json())
app.use('/user', userRoutes)

app.listen(process.env.PORT || 5000, ()=>console.log('the app is running'))