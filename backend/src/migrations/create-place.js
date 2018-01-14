'use strict'
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Places', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      lat: { type: Sequelize.STRING, allowNull: false },
      lng: { type: Sequelize.STRING, allowNull: false },
      name: { type: Sequelize.TEXT, allowNull: false },
      createdAt: { type: Sequelize.DATE, allowNull: false },
      updatedAt: { type: Sequelize.DATE, allowNull: false },
    })
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Places')
  },
}
