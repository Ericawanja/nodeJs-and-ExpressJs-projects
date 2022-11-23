const bcrypt = require("bcrypt")
const saltRounds = 10


const encrypt = async(password)=>{
    const salt = await bcrypt.genSalt(8)
    const hashed_pwd = await bcrypt.hash(password, salt)
    return hashed_pwd;
    /*    
    const hashedpass =  await bcrypt.hash(plain_password, 8)

        return hashedpass
    */
}

const comparePwd = async(plain_pwd, hashed_pwd)=>{
    const login= bcrypt.compare(plain_pwd, hashed_pwd)
    return login

}

module.exports ={encrypt, comparePwd}