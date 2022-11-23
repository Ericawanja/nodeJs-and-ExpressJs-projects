const Joi = require("joi");

const schema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().required().email({
    minDomainSegments: 2,
    tlds: { allow: ["com", "net"] },
  }),
  username: Joi.string().alphanum().min(3).max(50),
  password: Joi.string().required(),
  confirm_pwd: Joi.ref("password"),
}).with("name", "username");

function validateUser(data) {
  return schema.validate(data);
}

module.exports = validateUser;
