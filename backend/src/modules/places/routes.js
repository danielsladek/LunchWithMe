import expressAsyncAwait from 'express-async-await';
import { Router } from 'express';

import {
  getPlacesController,
  getPlaceDetailController,
  postPlaceController,
  deletePlaceController,
  putPlaceController,
} from './placesController';

const router = expressAsyncAwait(Router());
router.get('/', getPlacesController);
router.get('/:id', getPlaceDetailController);
router.post('/', postPlaceController);
router.delete('/:id', deletePlaceController);
router.put('/:id', putPlaceController);

export default router;
