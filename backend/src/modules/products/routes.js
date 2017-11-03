import expressAsyncAwait from 'express-async-await';
import { Router } from 'express';

import {
  productsController,
  categoriesController,
  productDetailController,
} from './productController';

const router = expressAsyncAwait(Router());
router.get('/', productsController);
router.get('/categories', categoriesController);
router.get('/:id', productDetailController);

export default router;
