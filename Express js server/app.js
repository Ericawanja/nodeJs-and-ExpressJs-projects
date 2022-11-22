const express = require('express')
const app = express()

app.use(express.json())

//get the routers
const trainees = require('./routers/trainees')

app.get('/', (req,res)=>{
    res.status(200).send('This is the home page')
})

app.use('/trainees', trainees)

app.listen(5000, ()=>console.log('app is running'))