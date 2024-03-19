const jwt = require('jsonwebtoken');

const authenticateUser = async (req, res, next) => {
  const { token } = req.session;

  if (!token) {
    return res.status(401).json({ message: "Unauthorized! Login first" });
  }

  jwt.verify(token, process.env.JWT_SECRET_KEY, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: "Invalid token" });
    }
    
    req.userId = decoded.userId;
    next();
  });
};

module.exports = authenticateUser;
