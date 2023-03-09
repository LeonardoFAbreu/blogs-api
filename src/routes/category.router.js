const express = require('express');
const { categoryController } = require('../controllers');
const { tokenValidation } = require('../helpers/tokenValidation');
const { validateCategoryName } = require('../helpers/categoryValidation');

const router = express.Router();

router.post('/', tokenValidation, validateCategoryName, categoryController.createCategory);

module.exports = router;