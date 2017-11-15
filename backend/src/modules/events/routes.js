import expressAsyncAwait from 'express-async-await';
import { Router } from 'express';

import {
  getEventsController,
  getEventDetailController,
  postEventController,
  deleteEventController,
  putEventController,
} from './eventsController';

const router = expressAsyncAwait(Router());
router.get('/', getEventsController);
router.get('/:id', getEventDetailController);
router.post('/', postEventController);
router.delete('/:id', deleteEventController);
router.put('/:id', putEventController);

export default router;
