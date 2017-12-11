'use strict';

module.exports = (sequelize, DataTypes) => {
  const Attendance = sequelize.define(
    'Attendance',
    {
<<<<<<< HEAD
      invited: { type: DataTypes.BOOLEAN, allowNull: true },
=======
      invited: { type: DataTypes.BOOLEAN, allowNull: false },
>>>>>>> master
      willAttend: { type: DataTypes.BOOLEAN, allowNull: true },
    },
    {}
  );

<<<<<<< HEAD
=======
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

>>>>>>> master
  return Attendance;
};
