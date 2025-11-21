import {Router} from 'express';
import AppRouter from './app.routes';


const router = Router();

router.use('/rsa', AppRouter);
// router.use('/clients', clientRoutes);
// router.use('/articles', articleRoutes);
// router.use('/orders', orderRoutes);

export {router};
