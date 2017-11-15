import expressAsyncAwait from 'express-async-await';
import { Router } from 'express';

import {
  getAttendancesController,
  getAttendanceDetailController,
  postAttendanceController,
  deleteAttendanceController,
  putAttendanceController,
} from './attendancesController';

const router = expressAsyncAwait(Router());
router.get('/', getAttendancesController);
router.get('/:id', getAttendanceDetailController);
router.post('/', postAttendanceController);
router.delete('/:id', deleteAttendanceController);
router.put('/user/:userId/event/:eventId', putAttendanceController);

export default router;
