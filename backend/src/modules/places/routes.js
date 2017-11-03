import expressAsyncAwait from 'express-async-await';
import { Router } from 'express';

import {
  placesController,
  placeDetailController,
} from './placesController';

const router = expressAsyncAwait(Router());
router.get('/', placesController);
router.get('/:id', placeDetailController);

export default router;
