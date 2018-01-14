import expressAsyncAwait from 'express-async-await'
import { Router } from 'express'

import {
  getEventsController,
  getEventDetailController,
  postEventController,
  deleteEventController,
  updateEvent,
  createNewEvent,
} from './eventsController'

const router = expressAsyncAwait(Router())
router.get('/', getEventsController)
router.get('/:id', getEventDetailController)
router.post('/', createNewEvent)
router.delete('/:id', deleteEventController)
router.put('/:id', updateEvent)

export default router
