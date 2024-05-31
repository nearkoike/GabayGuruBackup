const jwt = require("jsonwebtoken");
const userServices = require("../services/userServices");

const verifyToken = (req, res, next) => {
  if (!req.headers.authorization) {
    return res.status(401).send({ message: "No token provided" });
  }

  const token = req.headers.authorization.split(" ")[1];

  jwt.verify(token, process.env.ACCESS_TOKEN, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: "Invalid token" });
    }

    // Attach decoded user information to the request object
    req.decoded = decoded;

    next();
  });
};


module.exports = {
  verifyToken,
};
