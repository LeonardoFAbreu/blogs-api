const express = require('express');
const { CategoryController } = require('../controllers');
const { tokenValidation } = require('../helpers/tokenValidation');
const { validateCategoryName } = require('../helpers/categoryValidation');

const router = express.Router();

router.post('/', 
tokenValidation, 
validateCategoryName, 
CategoryController.createCategory);

router.get('/', tokenValidation, CategoryController.getAll);

module.exports = router;