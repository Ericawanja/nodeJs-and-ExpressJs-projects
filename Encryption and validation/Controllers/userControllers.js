const { encrypt, comparePwd } = require("../helpers/encryption");

const db_users = [
  {
    name: "Erica wanja",
    password: "get the pwd",
  },
];

const getUsers = (req, res) => {
  res.status(200).send("this will be");
};

const login = async (req, res) => {
  const user_data = req.body;

  //check if the user exists
  const user = db_users.find((u) => u.name === user_data.name);
  if (user) {
    const pwd_correct = await comparePwd(user_data.password, user.password);
    if (pwd_correct) {
      return res.status(200).json({ messege: `correct details` });
    } else {
      return res.status(404).json({ messege: `wrong details` });
    }
  } else {
    res.status(404).json({ messege: `The user does not exist` });
  }
};

const signup = async (req, res) => {
  let data = req.body;
  let pwd = await encrypt(data.password);
  res.status(200).json({ ...data, password: pwd });
};

module.exports = {
  login,
  signup,
  getUsers,
};
