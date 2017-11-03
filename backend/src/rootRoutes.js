import { Router } from 'express';

import contactRoutes from './modules/contacts/routes';
import productRoutes from './modules/products/routes';

const router = Router();

router.use('/contacts', contactRoutes);
router.use('/products', productRoutes);

export default router;
