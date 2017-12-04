//import addSeconds from 'date-fns/add_seconds';
var addSeconds = require('date-fns/add_seconds'),
    max = 75,
    min = 15;

module.exports = {
  up: (queryInterface, Sequelize) => {

    const userPromise = queryInterface.bulkInsert(
      'Users',
      [
        { createdAt: new Date(), updatedAt: new Date(), id: 1, name: 'John', icon: 'https://static.xx.fbcdn.net/rsrc.php/v3/yo/r/UlIqmHJn-SK.gif', surname: 'Doe', email: 'john.doe@lunchwithme.cz', facebookId: '555555555' },
        { createdAt: new Date(), updatedAt: new Date(), id: 2, name: 'Tomas', icon: 'https://static.xx.fbcdn.net/rsrc.php/v3/yo/r/UlIqmHJn-SK.gif', surname: 'Fenyk', email: 'tomas@lunchwithme.cz', facebookId: '666666666' },
        { createdAt: new Date(), updatedAt: new Date(), id: 3, name: 'Marek', icon: 'https://scontent.xx.fbcdn.net/v/t1.0-1/p80x80/14222227_10209192314719103_8607768522029368925_n.jpg?oh=d3b76abc34211ae1a49abfb4c4b8de6d&oe=5A9BDFD2', surname: 'Novy', email: 'marek@lunchwithme.cz', facebookId: '10213238493511044' },
        { createdAt: new Date(), updatedAt: new Date(), id: 4, name: 'Daniel', icon: 'https://scontent.xx.fbcdn.net/v/t1.0-1/p50x50/12744762_10205555401075372_3323371200062319048_n.jpg?oh=1f605c6cf68c7622cff3de34277cd31c&oe=5A99C640', surname: 'Sladek', email: 'daniel@lunchwithme.cz', facebookId: '10210121902915064' },
      ],
      {}
    );

    const placePromise = queryInterface.bulkInsert(
      'Places',
      [
        { createdAt: new Date(), updatedAt: new Date(), id: 1, lat: '50.000', lng: '50.000', name: 'Beer Nest' },
        { createdAt: new Date(), updatedAt: new Date(), id: 2, lat: '51.000', lng: '51.000', name: 'Kozlovna, Holesovice' },
        { createdAt: new Date(), updatedAt: new Date(), id: 3, lat: '52.000', lng: '52.000', name: 'Tradice, Andel' },
      ],
      {}
    );

    const eventPromise = queryInterface.bulkInsert(
      'Events',
      [
        { createdAt: new Date(), updatedAt: new Date(), placeId: 1, maximumLunchBuddies: 5, organizatorId: 4, description: 'Default event description.', timeStart: new Date(), timeEnd: addSeconds(new Date(), 60*Math.random() * (max - min) + min) },
        { createdAt: new Date(), updatedAt: new Date(), placeId: 2, maximumLunchBuddies: 5, organizatorId: 2, description: 'Default event description.', timeStart: new Date(), timeEnd: addSeconds(new Date(), 60*Math.random() * (max - min) + min) },
        { createdAt: new Date(), updatedAt: new Date(), placeId: 3, maximumLunchBuddies: 5, organizatorId: 3, description: 'Default event description.', timeStart: new Date(), timeEnd: addSeconds(new Date(), 60*Math.random() * (max - min) + min) },
      ],
      {}
    );

    const attendancePromise = queryInterface.bulkInsert(
      'Attendances',
      [
        { createdAt: new Date(), updatedAt: new Date(), userId: 1, eventId: 1, invited: 0, willAttend: 1 },
        { createdAt: new Date(), updatedAt: new Date(), userId: 2, eventId: 1, invited: 0, willAttend: 1 },
        { createdAt: new Date(), updatedAt: new Date(), userId: 2, eventId: 2, invited: 0, willAttend: 1 },
        { createdAt: new Date(), updatedAt: new Date(), userId: 3, eventId: 2, invited: 0, willAttend: 1 },
        { createdAt: new Date(), updatedAt: new Date(), userId: 4, eventId: 2, invited: 0, willAttend: 1 },
      ],
      {}
    );

    return Promise.all([userPromise, placePromise, eventPromise]);
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
