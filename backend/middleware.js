const { JWT_SECRET } = require("./routes/config");
const jwt = require("jsonwebtoken");
const authMiddleware = (req, res, next) => {
  //   console.log(req.headers);
  const authHeader = req.headers.authorization;
  //   console.log("auth header", authHeader);
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(403).json({
      msg: "headers missing",
    });
  }
  const token = authHeader.split(" ")[1];
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    if (decoded.userid) {
      req.userid = decoded.userid;
      next();
    } else {
      res.status(403).json({
        msg: "something went wrong",
      });
    }
  } catch (err) {
    console.log("error while parsing jwt", err);
    return res.status(403).json({ msg: "some error occurred" });
  }
};
module.exports = { authMiddleware };
