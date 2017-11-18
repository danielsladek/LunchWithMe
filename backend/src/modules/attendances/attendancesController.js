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
  const attendanceUpdated = await db.Attendance.update(req.body, { // Only parameters that were sent will be updated
    where: {
      userId: req.params.userId,
      eventId: req.params.eventId,
    }
  });

  res.json({ attendanceUpdated });
};
