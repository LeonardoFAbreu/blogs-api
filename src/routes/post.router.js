const express = require('express');

const { getAll } = require('../controllers/post.controller');

const { tokenValidation } = require('../helpers/tokenValidation');

const router = express.Router();

router.get('/', tokenValidation, getAll);

module.exports = router;