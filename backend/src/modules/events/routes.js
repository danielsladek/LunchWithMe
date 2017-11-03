import expressAsyncAwait from 'express-async-await';
import { Router } from 'express';

import {
  eventsController,
  eventDetailController,
} from './eventsController';

const router = expressAsyncAwait(Router());
router.get('/', eventsController);
router.get('/:id', eventDetailController);

export default router;
