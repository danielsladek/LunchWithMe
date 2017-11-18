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
  const event = await db.Event.findById(req.params.id);

  res.json({ event });
};

export const deleteEventController = async (req, res) => {
  const eventDeleted = await db.Event.destroy({
    where: {
      id: req.params.id,
    }
  });

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

export const putEventController = async (req, res) => {
  const eventUpdated = await db.Event.update(req.body, { // Only parameters that were sent will be updated
    where: {
      id: req.params.id,
    }
  });

  res.json({ eventUpdated });
};
