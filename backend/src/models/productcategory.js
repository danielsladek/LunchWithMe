'use strict';

module.exports = (sequelize, DataTypes) => {
  const ProductCategory = sequelize.define(
    'ProductCategory',
    {
      name: { type: DataTypes.STRING },
    },
    {}
  );

  ProductCategory.associate = function(models) {
    ProductCategory.hasMany(models.Product, {
      foreignKey: 'categoryId',
      as: 'products',
    });
  };

  return ProductCategory;
};
