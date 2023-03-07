const { User } = require('../models');

const userValidation = async ({ email, password }) => {
const validate = await User.findOne({ where: { email, password } });
  return validate;
};

module.exports = { userValidation };