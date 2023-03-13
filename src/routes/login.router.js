const express = require('express');

const router = express.Router();

const { LoginController } = require('../controllers');

router.post('/', LoginController.loginValidation);

module.exports = router;