import db from '../../models/';

export const getAttendancesController = async (req, res) => {
  const attendances = await db.Attendance.findAll({
  });

  res.json({ attendances });
};

export const getUserAttendanceController = async (req, res) => {
  const attendance = await db.Attendance.findAll({
    where: {
      userId: req.params.userId,
    }
  });

  res.json({ attendance });
};

export const getEventAttendanceController = async (req, res) => {
  const attendance = await db.Attendance.findAll({
    include: [{
        model: db.User,
        as: "user",
        required: false,
    }],
    where: {
      eventId: req.params.eventId,
    }
  });

  res.json({ attendance });
};

export const getAttendanceDetailController = async (req, res) => {
  const attendance = await db.Attendance.findAll({
    where: {
      userId: req.params.userId,
      eventId: req.params.eventId,
    }
  });

  res.json({ attendance });
};

export const deleteAttendanceController = async (req, res) => {
  const attendanceDeleted = await db.Attendance.destroy({
    where: {
      userId: req.params.userId,
      eventId: req.params.eventId,
    }
  });

  res.json({ attendanceDeleted });
};

export const postAttendanceController = async (req, res) => {
  const { userId, eventId, willAttend, invited } = req.body;
  const attendanceCreated = await db.Attendance.build({
    userId: userId,
    eventId: eventId,
    willAttend: willAttend,
    invited: invited,
  }).save();

  res.json({ attendanceCreated });
};

export const putAttendanceController = async (req, res) => {
  const { userId, eventId } = req.params,
        { willAttend } = req.body;

  const attendance = await db.Attendance.findOrCreate({
    where: {
      userId: userId,
      eventId: eventId,
    },
    defaults: {
      willAttend: willAttend,
      invited: false,
    }
  }).spread(function(attendance, created){
    if (created) {
      const { id } = created;

      res.json({ id: id });
    } else {
      const { id } = attendance;

      const updateAttendance = db.Attendance.update(req.body, {
        where: {
          userId: userId,
          eventId: eventId,
        }
      });

      res.json({ id: id });
    }
  });

  // Upsert only on PostgreSQL
  /*const attendance = await db.Attendance.upsert({
    where: {
      userId: userId,
      eventId: eventId,
    },
    defaults: {
      willAttend: willAttend,
      invited: false,
    }
  }).then(function (test) {
    console.log(test);
  });*/
};
