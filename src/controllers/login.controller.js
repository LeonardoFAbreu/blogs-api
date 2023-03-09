const jwt = require('jsonwebtoken');
const { UserService } = require('../services');

const { JWT_SECRET } = process.env;

const loginValidation = async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ message: 'Some required fields are missing' });
    }
    const user = await UserService.userValidation({ email, password });
    // console.log('Insira o usuário', user);
    if (!user) return res.status(400).json({ message: 'Invalid fields' });
    const payload = {
      email,
      admin: false,
    };
    const token = jwt.sign(payload, JWT_SECRET, {
      expiresIn: '1h',
    });
    return res.status(200).json({ token });
  };

module.exports = { loginValidation };