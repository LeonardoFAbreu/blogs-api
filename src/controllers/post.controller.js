const { PostService } = require('../services');

const getAll = async (req, res) => {
  try {
    const post = await PostService.getAll();
    res.status(200).json(post);
  } catch (err) {
    return res.status(500).json({ message: 'Erro interno', error: err.message });
  }
};

module.exports = {
  getAll,
};