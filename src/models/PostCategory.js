module.exports = (sequelize, DataTypes) => {
  const PostCategory = sequelize.define('PostCategory', {

    postId: {
      type: DataTypes.INTEGER,
      foreignKey: true,
    },

    categoryId: {
      type: DataTypes.INTEGER,
      foreignKey: true,
    },

  }, 
  {
    timestamps: false,
    tableName: 'posts_categories',
    underscored: true,
  });

  PostCategory.associate = (models) => {
    models.Category.belongsToMany(models.BlogPost, {
      as: 'alias_posts',
      through: PostCategory,
      foreignKey: 'postId',
      otherKey: 'categoryId',
    });

    models.BlogPost.belongsToMany(models.Category, {
      as: 'alias_categoty',
      through: PostCategory,
      foreignKey: 'categoryId',
      otherKey: 'postId',
    });
  };

  return PostCategory;
};
