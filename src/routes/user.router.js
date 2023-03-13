const express = require('express');

const router = express.Router();

const { UserController } = require('../controllers');

const {
  nameValidation,
  emailValidation,
  passwordValidation,
} = require('../helpers/userValidation');

const { tokenValidation } = require('../helpers/tokenValidation');

router.post(
  '/',
  nameValidation,
  emailValidation,
  passwordValidation,
  UserController.createUser,
);

router.get('/', tokenValidation, UserController.getAll);

router.get('/:id', tokenValidation, UserController.getById);

module.exports = router;