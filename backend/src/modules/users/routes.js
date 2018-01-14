import expressAsyncAwait from 'express-async-await'
import { Router } from 'express'

import {
  getUsersController,
  getUserDetailController,
  postUserController,
  deleteUserController,
  putUserController,
} from './usersController'

const router = expressAsyncAwait(Router())
router.get('/', getUsersController)
router.get('/:id', getUserDetailController)
router.post('/', postUserController)
router.delete('/:id', deleteUserController)
router.put('/:id', putUserController)
export default router
