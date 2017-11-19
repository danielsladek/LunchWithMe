import { Router } from 'express';

import eventRoutes from './modules/events/routes';
import placeRoutes from './modules/places/routes';
import userRoutes from './modules/users/routes';
import loginRoutes from './modules/login/routes';
import attendanceRoutes from './modules/attendances/routes';

const router = Router();

router.use('/events', eventRoutes);
router.use('/users', userRoutes);
router.use('/places', placeRoutes);
router.use('/login', loginRoutes);
router.use('/attendances', attendanceRoutes);

export default router;
