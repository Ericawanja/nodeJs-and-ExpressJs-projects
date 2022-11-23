const bcrypt = require("bcrypt")
const saltRounds = 10


const encrypt = async(password)=>{
    const salt = await bcrypt.genSalt(8)
    const hashed_pwd = await bcrypt.hash(password, salt)
    return hashed_pwd;
}

module.exports ={encrypt}