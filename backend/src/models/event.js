'use strict';

module.exports = (sequelize, DataTypes) => {
  const Event = sequelize.define(
    'Event',
    {
      description: { type: DataTypes.STRING, allowNull: false },
      timeStart: { type: DataTypes.DATE, allowNull: false },
      timeEnd: { type: DataTypes.DATE, allowNull: false },
    },
    {}
  );

  Event.associate = function(models) {
    Event.belongsTo(models.User, {
      foreignKey: 'organizerId',
      as: 'user',
    });

    Event.belongsTo(models.Place, {
      foreignKey: 'placeId',
      as: 'place',
    });
  };

  return Event;
};
