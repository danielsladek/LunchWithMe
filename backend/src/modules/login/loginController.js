import db from '../../models/';

export const loginController = async (req, res) => {
  const userFacebookName = req.body.name.split(' ')[0],
        userFacebookSurname = req.body.name.split(' ')[1],
        userFacebookEmail = req.body.email,
        userIcon = req.body.picture.data.url;

  /* Check if user has account */
  const userExists = db.User.findOrCreate({
    where: {
      facebookId: req.body.userID,
    },
    defaults: {
      name: userFacebookName,
      surname: userFacebookSurname,
      email: userFacebookEmail,
      icon: userIcon,
    }
  }).spread(function(userInfo, created){
    if (created) {
      const { id, name, surname, icon } = created;
      /* New user successfully created */
      res.json({ name: name, surname: surname, id: id, icon: icon });
    } else {
      /* User already has account */
      const { id, name, surname, email, icon } = userInfo;

      /* Check updates made on Facebook */
      if (name != userFacebookName ||
          surname != userFacebookSurname ||
          email != userFacebookEmail ||
          icon != userIcon) {

        var userUpdates = {
          email: userFacebookEmail,
          name: userFacebookName,
          surname: userFacebookSurname,
          icon: userIcon,
        };

        const userUpdated = db.User.update(userUpdates, {
          where: {
            id: id,
          }
        });
      }

      res.json({ name: name, surname: surname, id: id, icon: icon });
    }
  });
};
