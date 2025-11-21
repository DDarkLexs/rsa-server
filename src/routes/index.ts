import {Router} from 'express';
import { AppController } from '../controllers/app.controller';


const router = Router();

router.use('/rsa', AppController);
// router.use('/clients', clientRoutes);
// router.use('/articles', articleRoutes);
// router.use('/orders', orderRoutes);

export {router};
