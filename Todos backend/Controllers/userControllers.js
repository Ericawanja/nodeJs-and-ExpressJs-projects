const getuser = (req, res) => {
  res.status(200).send("we will have user");
};

const login = (req, res) => {
  res.status(200).send("we will log in the user");
};

const signup = (req, res) => {
  res.status(200).send("we will sign up the user");
};

module.exports = {
  getuser,
  login,
  signup,
};
