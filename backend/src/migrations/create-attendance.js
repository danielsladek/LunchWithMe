'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Attendances', {
<<<<<<< HEAD
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      userId: { type: Sequelize.INTEGER, allowNull: false, unique: 'attendanceIndex' },
      eventId: { type: Sequelize.INTEGER, allowNull: false, unique: 'attendanceIndex' },
      willAttend: { type: Sequelize.BOOLEAN, allowNull: true },
=======
      userId: { type: Sequelize.INTEGER, allowNull: false, unique: 'attendanceIndex' },
      eventId: { type: Sequelize.INTEGER, allowNull: false, unique: 'attendanceIndex' },
      willAttend: { type: Sequelize.BOOLEAN, allowNull: false },
>>>>>>> master
      invited: { type: Sequelize.BOOLEAN, allowNull: true },
      createdAt: { type: Sequelize.DATE, allowNull: false },
      updatedAt: { type: Sequelize.DATE, allowNull: false },
    });
  },
  down: (queryInterface, Sequelize) => {
<<<<<<< HEAD
    return queryInterface.dropTable('Attendances');
=======
    return queryInterface.dropTable('Event');
>>>>>>> master
  },
};
