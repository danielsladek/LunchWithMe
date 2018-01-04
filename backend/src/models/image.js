'use strict';

module.exports = (sequelize, DataTypes) => {
  const Image = sequelize.define(
    'Image',
    {
      blob: { type: DataTypes.BLOB, allowNull: false },
      name: { type: DataTypes.STRING, allowNull: false },
      userId: { type: DataTypes.INTEGER, allowNull: false },
    },
    {}
  );

  Image.associate = function(models) {
    Image.belongsTo(models.User, { foreignKey: 'userId', as: 'organizator' });
  };

  return Image;
};
