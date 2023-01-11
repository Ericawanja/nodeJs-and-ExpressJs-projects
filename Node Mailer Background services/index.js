const nodemailer = require("nodemailer")
const ejs= require("ejs")
require("dotenv").config()

const mailConfigurations = {
    host: "smtp.gmail.com",
    port: 587,
    secure: false, 
    auth: {
      user: process.env.USER, 
      pass: process.env.EMAILPASS, 
    }
}

const transporter = nodemailer.createTransport(mailConfigurations)

const mailOptions = {
    from: process.env.SENDER,
    to:process.env.To,
    subject:"The subject",
    text:"Hello"

}

try{
transporter.sendMail(mailOptions)
}catch(error){
    console.log(error);
}