import expressAsyncAwait from 'express-async-await'
import { Router } from 'express'

import { loginController } from './loginController'

const router = expressAsyncAwait(Router())
router.post('/', loginController)
export default router
