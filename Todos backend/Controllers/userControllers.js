const { exec } = require("../DatabaseHelpers/db_connect");
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');
require('dotenv').config()

const getuser = (req, res) => {
  res.status(200).send("we will have user");
};

const login = async (req, res) => {
  // compare the password
  //get the plain password
  const { password, email } = req.body;
  //get the stored password
  let user = await (await exec("getUser", { email })).recordset[0];

  if (user) {
    // check if user exist
    const allowed_to_login = await bcrypt.compare(password, user.password);

    if (allowed_to_login) {
      //allowed to log in generate the access token

      const {password, ...payload}=user
      const token = await jwt.sign(payload,process.env.SECRET_KEY, {expiresIn:'120890890s'})
     
      res
      .status(200)
      .json({token});
  

    } else {
      return res
        .status(200)
        .json({ message: "You have entered wrong creditials" });
    }
  } else {
    res.status(200).json({ message: "use does not exist" });
  }
};

const signup = async (req, res) => {
  //hash the password and insert the user

  const { password } = req.body;

  const hashed_pwd = await bcrypt.hash(password, 8);
  const newUser = { ...req.body, password: hashed_pwd };
  console.log(newUser);
  await exec("insertUser", newUser);
  res.status(200).json({ message: "user inserted succesfully" });
};


const homepage=async(req,res)=>{
  try {
    const {username}= req.info
   res.json(`Welcome to The System ${username}`)
  } catch (error) {
   return res.status(400).json({message:error.message})
  }
}

module.exports = {
  getuser,
  login,
  signup,
  homepage,
};
