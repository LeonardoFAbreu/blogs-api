const { User } = require('../models');

const createUser = ({ displayName, email, password, image }) => {
    User.create({ displayName, email, password, image });
};

const getAll = async () => User.findAll({ attributes: { exclude: 'password' } });

const getById = async (id) => {
    const user = await User.findByPk(id);
    if (!user) {
      const error = { status: 404, message: 'User does not exist' };
      return error;
    }
    return { status: 200, message: user };
  };

const userValidation = async ({ email, password }) => {
    const validate = await User.findOne({ where: { email, password } });
      return validate;
    };

module.exports = { 
    createUser,
    getAll,
    getById,
    userValidation,
};