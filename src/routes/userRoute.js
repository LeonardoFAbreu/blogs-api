const express = require('express');

const router = express.Router();

const userController = require('../controllers/user');

const {
  nameValidation,
  emailValidation,
  passwordValidation,
} = require('../helpers/userValidation');

router.post(
  '/',
  nameValidation,
  emailValidation,
  passwordValidation,
  userController.createUser,
);

module.exports = router;