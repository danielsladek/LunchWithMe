import expressAsyncAwait from 'express-async-await';
import { Router } from 'express';

import {
  getImagesController,
  postImageController,
  deleteImageController,
  getImagesByEventController,
} from './imageController';

const router = expressAsyncAwait(Router());
router.get('/', getImagesController);
router.get('/event/:eventId', getImagesByEventController);
router.post('/', postImageController);
router.delete('/:id', deleteImageController);
export default router;
