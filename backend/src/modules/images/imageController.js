import db from '../../models/';

export const getImagesController = async (req, res) => {
  const images = await db.Image.findAll({
  });

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

export const postImageController = async (req, res) => {
  const { name, userId, blob } = req.body;
  const imageCreated = await db.Image.build({
    name: name,
    blob: blob,
    userId, userId
  }).save();

  res.json({ imageCreated });
};
