import expressAsyncAwait from 'express-async-await';
import { Router } from 'express';

import {
  usersController,
  userDetailController,
} from './usersController';

const router = expressAsyncAwait(Router());
router.get('/', usersController);
router.get('/:id', userDetailController);

export default router;
