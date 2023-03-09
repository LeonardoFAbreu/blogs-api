const jwt = require('jsonwebtoken');
const { UserService } = require('../services');

const { JWT_SECRET } = process.env;

const createUser = (req, res) => {
    const { displayName, email, password, image } = req.body;
    UserService.createUser({ displayName, email, password, image });
    const payload = {
        email,
        admin: false,
      };
      const token = jwt.sign(payload, JWT_SECRET, {
        expiresIn: '1h',
      });
      return res.status(201).json({ token });
};

const getAll = async (_req, res) => {
  try {
    const users = await UserService.getAll();
    res.status(200).json(users);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const getById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { status, message } = await UserService.getById(id);
    if (status === 404) {
      return res.status(status).json({ message });
    }
    delete message.dataValues.password;
    return res.status(status).json(message);
  } catch (error) {
    return next(error);
  }
};

module.exports = { 
  createUser,
  getAll,
  getById,
};