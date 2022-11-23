const validateUser  = require("../helpers/validation");

const validate_middleware = (req, res, next) => {
  const { error, value } = validateUser(req.body);
  console.log(error, value)
  if (error) {
    let errors = error.details.map((err) => err.message);
    return res.json(errors);
  }
  req.body = value
  next();
};

module.exports = validate_middleware