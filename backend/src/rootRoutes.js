import { Router } from 'express';

import eventRoutes from './modules/events/routes';
import placeRoutes from './modules/places/routes';
import userRoutes from './modules/users/routes';

const router = Router();

router.use('/events', eventRoutes);
router.use('/users', userRoutes);
router.use('/places', placeRoutes);

export default router;
