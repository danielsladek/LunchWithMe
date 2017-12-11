import expressAsyncAwait from 'express-async-await';
import { Router } from 'express';

import {
  getEventsController,
  getEventDetailController,
  postEventController,
  deleteEventController,
  putEventController,
<<<<<<< HEAD
  createNewEvent,
=======
>>>>>>> master
} from './eventsController';

const router = expressAsyncAwait(Router());
router.get('/', getEventsController);
router.get('/:id', getEventDetailController);
<<<<<<< HEAD
router.post('/', createNewEvent);
=======
router.post('/', postEventController);
>>>>>>> master
router.delete('/:id', deleteEventController);
router.put('/:id', putEventController);

export default router;
