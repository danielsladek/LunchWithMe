'use strict';

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
    {
      name: { type: DataTypes.STRING, allowNull: false },
      surname: { type: DataTypes.STRING, allowNull: false },
      //favouritePlace: { type: DataTypes.TEXT, allowNull: false },
      //favouriteMeal: { type: DataTypes.TEXT, allowNull: false },
    },
    {}
  );

  return User;
};
