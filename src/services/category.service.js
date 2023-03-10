const { Category } = require('../models');

const createCategory = async (name) => {
  const newCategory = await Category.create({ name });
  return { status: 201, message: newCategory };
};

const getAll = async () => Category.findAll();

module.exports = { 
  createCategory,
  getAll };
