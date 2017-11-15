'use strict';

module.exports = (sequelize, DataTypes) => {
  const Attendance = sequelize.define(
    'Attendance',
    {
      invited: { type: DataTypes.BOOLEAN, allowNull: false },
      willAttend: { type: DataTypes.BOOLEAN, allowNull: true },
    },
    {}
  );

  Attendance.associate = function(models) {
    Attendance.belongsTo(models.User, {
      foreignKey: 'userId',
      as: 'user',
    });

    Attendance.belongsTo(models.Event, {
      foreignKey: 'eventId',
      as: 'event',
    });
  };

  return Attendance;
};
