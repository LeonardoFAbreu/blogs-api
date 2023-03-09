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

module.exports = {
  createCategory,
};