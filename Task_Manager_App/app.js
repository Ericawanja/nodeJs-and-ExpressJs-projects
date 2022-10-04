const express = require('express')
const app = express();

app.get('/', (req, res)=>{
    res.send("You did it")
})
//app.get("/api/v1/tasks")
// app.posts("api/v1/tasks")
const PORT = 5000;

app.listen(PORT, console.log('App is running'))