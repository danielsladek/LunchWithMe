'use strict'

module.exports = (sequelize, DataTypes) => {
  const Attendance = sequelize.define(
    'Attendance',
    {
      invited: { type: DataTypes.BOOLEAN, allowNull: true },
      willAttend: { type: DataTypes.BOOLEAN, allowNull: true },
    },
    {}
  )

  return Attendance
}
