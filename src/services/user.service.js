const { User } = require('../models');

const createUser = ({ displayName, email, password, image }) => {
    User.create({ displayName, email, password, image });
};

const getAll = async () => User.findAll({ attributes: { exclude: 'password' } });

const userValidation = async ({ email, password }) => {
    const validate = await User.findOne({ where: { email, password } });
      return validate;
    };

module.exports = { 
    createUser,
    getAll,
    userValidation,
};