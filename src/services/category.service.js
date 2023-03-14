const { Category } = require('../models');

const getAll = async () => Category.findAll();

const getById = async (id) => {
  const category = await Category.findByPk(id);
  return category;
};

const createCategory = async (name) => {
  const newCategory = await Category.create({ name });
  return { status: 201, message: newCategory };
};

module.exports = { 
  createCategory,
  getAll,
  getById,
};