import expressAsyncAwait from 'express-async-await';
import { Router } from 'express';

import {
  getAttendancesController,
  getAttendanceDetailController,
  getUserAttendanceController,
  getEventAttendanceController,
  postAttendanceController,
  deleteAttendanceController,
  putAttendanceController,
} from './attendancesController';

const router = expressAsyncAwait(Router());
router.get('/', getAttendancesController);
router.get('/user/:userId/event/:eventId', getAttendanceDetailController);
router.get('/event/:eventId/user/:userId', getAttendanceDetailController);
router.get('/user/:userId', getUserAttendanceController);
router.get('/event/:eventId', getEventAttendanceController);
router.post('/', postAttendanceController);
router.delete('/:id', deleteAttendanceController);
router.put('/user/:userId/event/:eventId', putAttendanceController);
router.put('/event/:eventId/user/:userId', putAttendanceController);

export default router;
