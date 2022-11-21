const express = require('express')
 const app = express()

 app.get('/', (req,res)=>{
    res.send('Hello')
 })
 const server = app.listen(4000)