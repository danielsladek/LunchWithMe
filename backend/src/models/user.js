'use strict';

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
    {
      name: { type: DataTypes.STRING, allowNull: false },
      surname: { type: DataTypes.STRING, allowNull: false },
      facebookId: { type: DataTypes.STRING, allowNull: false, unique: true },
      email: { type: DataTypes.STRING, allowNull: false, unique: true },
      icon: { type: DataTypes.STRING, allowNull: true },
      //favouritePlace: { type: DataTypes.TEXT, allowNull: false },
      //favouriteMeal: { type: DataTypes.TEXT, allowNull: false },
    },
    {}
  );

  User.associate = function(models) {
    User.belongsToMany(models.Event, { as: 'attendances', through: models.Attendance, foreignKey: 'userId', onDelete: 'CASCADE', hooks: true });
  };

  User.associate = function(models) {
    User.hasMany(models.Event, { foreignKey: 'organizatorId', as: 'organizes', onDelete: 'CASCADE', hooks: true });
  };

  return User;
};
