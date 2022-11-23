const { encrypt } = require("../helpers/encryption")

const getUsers = (req, res)=>{
    res.status(200).send('this will be')
}


const login = (req, res)=>{
    res.status(200).send('this will be sign in fuctionality')
}

const signup = async(req,res)=>{
    let data = req.body
    let pwd =await encrypt(data.password)
    res.status(200).send(pwd)
  
}

module.exports={
    login,
    signup,
    getUsers
}