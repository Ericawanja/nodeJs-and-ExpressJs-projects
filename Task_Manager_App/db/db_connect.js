require('dotenv').config();

const  mongoose = require("mongoose");

console.log(process.env.MONGO_URI)




const connectDB = (url) => {
  return mongoose
    .connect(url)
    .then(() => console.log("connected to the db"))
    .catch((err) => console.log(err));
};

module.exports = connectDB


