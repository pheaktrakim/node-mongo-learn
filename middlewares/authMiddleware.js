const jwt = require('jsonwebtoken');
const blacklist = require('../utils/tokenBlacklist');

exports.authenticate = (req, res, next) => {
  const token = req.header('Authorization')?.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'No token provided, authorization denied' });
  }

  // Check if the token is blacklisted
  if (blacklist.has(token)) {
    return res.status(401).json({ message: 'Token is no longer valid (logged out)' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET); // Replace with your JWT secret
    req.user = decoded; // Attach decoded user info to the request
    next();
  } catch (error) {
    res.status(401).json({ message: 'Token is not valid' });
  }
};
