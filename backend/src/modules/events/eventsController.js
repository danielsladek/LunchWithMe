import db from '../../models/';

export const getEventsController = async (req, res) => {
  const events = await db.Event.findAll({
    include: [{
        model: db.User,
        as: "organizator",
        required: false,
    },{
        model: db.Place,
        as: "place",
        required: false,
    },{
        model: db.User,
        as: "eventAttendees",
        required: false,
    }],
  });

  res.json({ events });
};

export const getEventDetailController = async (req, res) => {
  const event = await db.Event.findById(req.params.id, {
      include: [{
        model: db.User,
        as: "organizator",
        required: false,
    },{
        model: db.Place,
        as: "place",
        required: false,
    },{
        model: db.User,
        as: "eventAttendees",
        required: false,
    }],
  });

  res.json({ event });
};

export const deleteEventController = async (req, res) => {


  const eventDeleted = await db.Event.destroy({
    where: {
      id: req.params.id,
    }
  });

  /* Cascade delete not working - delete attendances manually */
  if (eventDeleted) {
    const attendancesDelete = await db.Attendance.destroy({
      where: {
        eventId: req.params.id,
      }
    });
  }

  res.json({ eventDeleted });
};

export const postEventController = async (req, res) => {
  const { description, timeStart, timeEnd, placeId, organizerId } = req.body;
  const eventCreated = await db.Event.build({
    description: description,
    timeStart: timeStart,
    timeEnd: timeEnd,
    placeId: placeId,
    organizerId: organizerId,
  }).save();

  res.json({ eventCreated });
};

export const createNewEvent = async (req, res) => {
  const { description, placeName, timeStart, timeEnd, organizatorId, lat, lng } = req.body;

  /* Create new place if not found */
  const placeFound = await db.Place.findOne({
    where: {
      name: placeName,
    }
  });

  var placeId = null;

  if (placeFound != null) {
    /* PLace already exists in the database */
    placeId = placeFound.dataValues.id;
  } else {
    /* Create new place */
    const placeCreated = await db.Place.build({
      name: placeName,
      lat: lat,
      lng: lng,
    }).save();

    placeId = placeCreated.id;
  }

  /* Create event */
  const eventCreated = await db.Event.build({
    description: description,
    timeStart: timeStart,
    timeEnd: timeEnd || null,
    placeId: placeId,
    organizatorId: organizatorId,
  }).save();

  /* Create attendance for event organizator */
  const attendanceCreated = await db.Attendance.build({
    UserId: organizatorId,
    eventId: eventCreated.dataValues.id,
    willAttend: true, // Event organizer must attend or event is not taking place
    invited: null,
  }).save();

  res.json({ eventCreated });
};

export const updateEvent = async (req, res) => {
  const { description, placeName, timeStart, timeEnd, organizatorId, lat, lng } = req.body;

  /* Create new place if not found */
  const placeFound = await db.Place.findOne({
    where: {
      name: placeName,
    }
  });

  var placeId = null;

  if (placeFound != null) {
    /* PLace already exists in the database */
    placeId = placeFound.dataValues.id;
  } else {
    /* Create new place */
    const placeCreated = await db.Place.build({
      name: placeName,
      lat: lat,
      lng: lng,
    }).save();

    placeId = placeCreated.id;
  }

  const eventUpdated = await db.Event.update({
      description: description,
      timeStart: timeStart,
      timeEnd: timeEnd || null,
      placeId: placeId,
      //organizatorId: organizatorId,
    }, {
    where: {
      id: req.params.id,
    }
  });

  res.json({ eventUpdated });
};
