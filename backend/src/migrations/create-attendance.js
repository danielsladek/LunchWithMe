'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Attendances', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      userId: { type: Sequelize.INTEGER, allowNull: false, unique: 'attendanceIndex' },
      eventId: { type: Sequelize.INTEGER, allowNull: false, unique: 'attendanceIndex' },
      willAttend: { type: Sequelize.BOOLEAN, allowNull: false },
      invited: { type: Sequelize.BOOLEAN, allowNull: true },
      createdAt: { type: Sequelize.DATE, allowNull: false },
      updatedAt: { type: Sequelize.DATE, allowNull: false },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Event');
  },
};
