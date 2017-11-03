import expressAsyncAwait from 'express-async-await';
import { Router } from 'express';

import {
  contactsController,
  contactDetailController,
} from './contactController.js';

const router = expressAsyncAwait(Router());
router.get('/', contactsController);
router.get('/:id', contactDetailController);

export default router;
