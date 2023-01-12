const ejs = require("ejs")
require("dotenv").config()
const users =[{
    email:process.env.TO
}]
const welcomeEmailService = async()=>{
    console.log("Running");
}
module.exports = welcomeEmailService