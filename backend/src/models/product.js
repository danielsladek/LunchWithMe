'use strict';

module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define(
    'Product',
    {
      title: { type: DataTypes.STRING, allowNull: false },
      price: { type: DataTypes.DECIMAL(10, 2) },
      shortInfo: { type: DataTypes.TEXT, allowNull: false },
    },
    {}
  );

  Product.associate = function(models) {
    Product.belongsTo(models.ProductCategory, {
      foreignKey: 'categoryId',
      as: 'category',
    });
  };

  return Product;
};
