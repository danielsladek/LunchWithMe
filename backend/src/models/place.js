'use strict'

module.exports = (sequelize, DataTypes) => {
  const Place = sequelize.define(
    'Place',
    {
      lat: { type: DataTypes.STRING, allowNull: false },
      lng: { type: DataTypes.STRING, allowNull: false },
      name: { type: DataTypes.TEXT, allowNull: false },
    },
    {}
  )

  return Place
}
