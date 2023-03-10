const { CategoryService } = require('../services');

const createCategory = async (req, res, next) => {
  try {
    const { name } = req.body;
    const { status, message } = await CategoryService.createCategory(name);
    if (status === 409) {
      return res.status(status).json({ message });
    }
    return res.status(status).json(message);
  } catch (error) {
    return next(error);
  }
};

const getAll = async (req, res) => {
  try {
    const categories = await CategoryService.getAll();
    res.status(200).json(categories);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = { 
  createCategory,
  getAll,
};