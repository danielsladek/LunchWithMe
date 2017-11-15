//import addSeconds from 'date-fns/add_seconds';
var addSeconds = require('date-fns/add_seconds'),
    max = 75,
    min = 15;

module.exports = {
  up: (queryInterface, Sequelize) => {

    const userPromise = queryInterface.bulkInsert(
      'Users',
      [
        { createdAt: new Date(), updatedAt: new Date(), id: 1, name: 'John', surname: 'Doe' },
      ],
      {}
    );

    const placePromise = queryInterface.bulkInsert(
      'Places',
      [
        { createdAt: new Date(), updatedAt: new Date(), id: 1, coordsX: '50.000', coordsY: '50.000', name: 'Beer Nest' },
      ],
      {}
    );

    const eventPromise = queryInterface.bulkInsert(
      'Events',
      [
        { createdAt: new Date(), updatedAt: new Date(), placeId: 1, organizerId: 1, description: 'Default event description.', timeStart: new Date(), timeEnd: addSeconds(new Date(), 60*Math.random() * (max - min) + min) },
      ],
      {}
    );

    const attendancePromise = queryInterface.bulkInsert(
      'Attendances',
      [
        { createdAt: new Date(), updatedAt: new Date(), userId: 1, eventId: 1, invited: 0, willAttend: 1 },
      ],
      {}
    );

    return Promise.all([userPromise, placePromise, eventPromise, attendancePromise]);
  },

  down: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.bulkDelete('Events', null, {}),
      queryInterface.bulkDelete('Users', null, {}),
      queryInterface.bulkDelete('Places', null, {}),
      queryInterface.bulkDelete('Attendances', null, {})
    ]);
  },
};
