import db from '../../models/';

export const getImagesController = async (req, res) => {
  const images = await db.Image.findAll();

  res.json({ images });
};

export const deleteImageController = async (req, res) => {
  const imageDeleted = await db.Image.destroy({
    where: {
      id: req.params.id,
    }
  });

  res.json({ imageDeleted });
};

export const getImagesByEventController = async (req, res) => {
  
  const images = await db.Image.findAll({
    where: {
      eventId: req.params.eventId,
    }
  });

  res.json({ images });
  
};


export const postImageController = async (req, res) => {
  const { name, userId, blob, eventId } = req.body;
  const imageCreated = await db.Image.build({
    name: name,
    blob: blob,
    userId, userId,
    eventId, eventId
  }).save();

  res.json({ imageCreated });
};
