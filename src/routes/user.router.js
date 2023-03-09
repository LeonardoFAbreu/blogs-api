const express = require('express');

const router = express.Router();

const { userController } = require('../controllers');

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
  userController.createUser,
);

router.get('/', tokenValidation, userController.getAll);

router.get('/:id', tokenValidation, userController.getById);

module.exports = router;