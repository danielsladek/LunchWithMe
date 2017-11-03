import db from '../../models/';

export const eventsController = async (req, res) => {
  const events = await db.Event.findAll({
  });

  res.json({ events });
};

export const eventDetailController = async (req, res) => {
  const event = await db.Event.findById(req.params.id);

  res.json({ event });
};
