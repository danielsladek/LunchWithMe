'use strict'
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Events', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      description: { type: Sequelize.STRING, allowNull: false },
      organizatorId: { type: Sequelize.INTEGER, allowNull: false },
      maximumLunchBuddies: { type: Sequelize.INTEGER, allowNull: true },
      timeStart: { type: Sequelize.DATE, allowNull: false },
      timeEnd: { type: Sequelize.DATE, allowNull: true },
      placeId: { type: Sequelize.INTEGER, allowNull: false },
      createdAt: { type: Sequelize.DATE, allowNull: false },
      updatedAt: { type: Sequelize.DATE, allowNull: false },
    })
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Events')
  },
}
