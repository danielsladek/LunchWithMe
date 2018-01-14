'use strict'

module.exports = (sequelize, DataTypes) => {
  const Image = sequelize.define(
    'Image',
    {
      blob: { type: DataTypes.BLOB, allowNull: false },
      name: { type: DataTypes.STRING, allowNull: true },
      mimeType: { type: DataTypes.STRING, allowNull: false },
      userId: { type: DataTypes.INTEGER, allowNull: false },
      eventId: { type: DataTypes.INTEGER, allowNull: false },
    },
    {
      timestamps: false,
    }
  )

  Image.associate = function(models) {
    Image.belongsTo(models.User, { foreignKey: 'userId', as: 'organizator' })
    Image.belongsTo(models.Event, { foreignKey: 'eventId', as: 'event' })
  }

  return Image
}
