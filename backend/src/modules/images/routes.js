import expressAsyncAwait from 'express-async-await';
import { Router } from 'express';

import {
  getImagesController,
  postImageController,
  deleteImageController,
} from './imageController';

const router = expressAsyncAwait(Router());
router.get('/', getImagesController);
router.post('/', postImageController);
router.delete('/:id', deleteImageController);
export default router;
