'use strict';

module.exports = (sequelize, DataTypes) => {
  const Event = sequelize.define(
    'Event',
    {
      description: { type: DataTypes.STRING, allowNull: false },
      maximumLunchBuddies: { type: DataTypes.INTEGER, allowNull: true },
      timeStart: { type: DataTypes.DATE, allowNull: false },
      timeEnd: { type: DataTypes.DATE, allowNull: false },
      organizatorId: { type: DataTypes.INTEGER, allowNull: false },
    },
    {}
  );

  Event.associate = function(models) {

    Event.belongsTo(models.User, { foreignKey: 'organizatorId', as: 'organizator' });

    Event.belongsTo(models.Place, {
      foreignKey: 'placeId',
      as: 'place',
    });

    Event.belongsToMany(models.User, { as: 'eventAttendees', through: models.Attendance, foreignKey: 'eventId' });

  };

  return Event;
};
