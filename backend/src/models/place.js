'use strict';

module.exports = (sequelize, DataTypes) => {
  const Place = sequelize.define(
    'Place',
    {
      coordsX: { type: DataTypes.STRING, allowNull: false },
      coordsY: { type: DataTypes.STRING, allowNull: false },
      name: { type: DataTypes.TEXT, allowNull: false }
    },
    {}
  );
  
  return Place;
};
