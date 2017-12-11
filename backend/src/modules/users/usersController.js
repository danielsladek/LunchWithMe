import db from '../../models/';

export const getUsersController = async (req, res) => {
  const users = await db.User.findAll({
  });

  res.json({ users });
};

export const getUserDetailController = async (req, res) => {
<<<<<<< HEAD
  const user = await db.User.findOne({
    include: [{
        model: db.Event,
        as: "organizes",
        required: false,
    }],
    where: {
      id: req.params.id,
    },
  });
=======
  const user = await db.User.findById(req.params.id);
>>>>>>> master

  res.json({ user });
};

export const deleteUserController = async (req, res) => {
  const userDeleted = await db.User.destroy({
    where: {
      id: req.params.id,
    }
  });

  res.json({ userDeleted });
};

export const postUserController = async (req, res) => {
  const { name, surname } = req.body;
  const userCreated = await db.User.build({
    name: name,
    surname: surname,
  }).save();

  res.json({ userCreated });
};

export const putUserController = async (req, res) => {
<<<<<<< HEAD
  const userUpdated = await db.User.update(req.body, { // Only parameters that were sent will be updated
=======
  const userUpdated = await db.User.update(req.body, { // Only parameters that wereg sent will be updated
>>>>>>> master
    where: {
      id: req.params.id,
    }
  });

  res.json({ userUpdated });
};
