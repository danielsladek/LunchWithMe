'use strict'
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Images', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: { type: Sequelize.STRING, allowNull: true },
      blob: { type: Sequelize.BLOB, allowNull: false },
      mimeType: { type: Sequelize.STRING, allowNull: false },
      userId: { type: Sequelize.INTEGER, allowNull: false },
      eventId: { type: Sequelize.INTEGER, allowNull: false },
    })
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Images')
  },
}
