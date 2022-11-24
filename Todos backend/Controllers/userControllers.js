const {exec} = require('../DatabaseHelpers/db_connect')
const bcrypt = require('bcrypt');


const getuser = (req, res) => {
 
  res.status(200).send("we will have user");
};

const login = async(req, res) => { // compare the password
  const { password } = req.body
  console.log(password);
  const hashed_pwd = await bcrypt(password , 8)
  res.status(200).json(hashed_pwd);
};

const signup = async(req, res) => { //hash the password and insert the user
 
  const { password } = req.body
 
  const hashed_pwd = await bcrypt.hash(password, 8)
  const newUser = {...req.body, password:hashed_pwd}
  console.log(newUser);
  await exec('insertUser', newUser)
  res.status(200).json({'message':"user inserted succesfully"});
};

module.exports = {
  getuser,
  login,
  signup,
};
