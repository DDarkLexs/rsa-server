import { Router } from 'express';
import { AppController } from '../controllers/app.controller';

const router = Router();
const appController = new AppController();

// Create a new user
router.post('/sign', (req, res, next) => appController.sign(req, res, next));

export default router;