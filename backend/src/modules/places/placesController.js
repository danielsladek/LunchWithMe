import db from '../../models/';

export const placesController = async (req, res) => {
  const places = await db.Place.findAll({
  });

  res.json({ places });
};

export const placeDetailController = async (req, res) => {
  const place = await db.Place.findById(req.params.id);

  res.json({ place });
};
