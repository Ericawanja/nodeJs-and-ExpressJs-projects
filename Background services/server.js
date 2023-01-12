const express = require("express")
const welcomeEmailService = require("./services/welcome")
const app = express()

const cron = require('node-cron');
cron.schedule("*/1 * * * *")
app.listen(5000, ()=>console.log('server running'))