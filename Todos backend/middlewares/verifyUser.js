const jwt = require("jsonwebtoken");
require("dotenv").config();

const verifyToken = (req, res, next) => {
  try {
    const token = req.headers["token"];
    console.log(token);
    if (!token) {
      return res
        .status(401)
        .json({ message: "YOu are not authorized to access this resource" });
    }
    const decodedData = jwt.verify(token, process.env.SECRET_KEY);
    req.info = decodedData;
  } catch (error) {
    return res.status(401).json({ message: error.message });
  }
  next();
};

module.exports={
    verifyToken
}