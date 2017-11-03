import db from '../../models/';

export const usersController = async (req, res) => {
  const users = await db.Event.findAll({
  });

  res.json({ users });
};

export const userDetailController = async (req, res) => {
  const user = await db.Event.findById(req.params.id);

  res.json({ user });
};
