const jwt = require("jsonwebtoken");
const config = require("config");

module.exports = function (req, res, next) {
  //get the token from the header

  const token = req.header("x-auth-token");

  //if no token

  if (!token) {
    return res.status(401).json({ msg: "No token, authorization denied" });
  }

  //verify the token

  try {
    const decoded = jwt.verify(token, config.get("jwtToken"));

    req.user = decoded.user;

    next();
  } catch (error) {
    return res.status(401).json({ msg: "token is not valid" });
  }
};
