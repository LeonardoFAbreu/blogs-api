const { verifyToken } = require('../authentications/auth');

const tokenValidation = (req, res, next) => {
  try {
    const token = req.header('Authorization');
    if (!token) {
      return res.status(401).json({ message: 'Token not found' });
    }

    const payload = verifyToken(token);
    req.body.data = payload;

    next();
  } catch (error) {
    res.status(401).json({ message: 'Expired or invalid token' });
  }
};

  module.exports = { tokenValidation };