import db from '../../models/';

export const getPlacesController = async (req, res) => {
  const places = await db.Place.findAll({
  });

  res.json({ places });
};

export const getPlaceDetailController = async (req, res) => {
  const place = await db.Place.findById(req.params.id);

  res.json({ place });
};

export const deletePlaceController = async (req, res) => {
  const placeDeleted = await db.Place.destroy({
    where: {
      id: req.params.id,
    }
  });

  res.json({ placeDeleted });
};

export const postPlaceController = async (req, res) => {
  const { coordsX, coordsY, name } = req.body;
  const placeCreated = await db.Place.build({
    coordsX: coordsX,
    coordsY: coordsY,
    name: name,
  }).save();

  res.json({ placeCreated });
};

export const putPlaceController = async (req, res) => {
  const placeUpdated = await db.Place.update(req.body, { // Only parameters that wereg sent will be updated
    where: {
      id: req.params.id,
    }
  });

  res.json({ placeUpdated });
};
