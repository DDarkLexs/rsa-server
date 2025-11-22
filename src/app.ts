
import express from 'express';
import cors from 'cors';
import { router } from './routes';
import { errorHandler } from './middlewares/errorHandler';
import { verifyApiKey } from './middlewares/authorization';
import helmet from 'helmet';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(helmet());            // segurança geral
app.use(verifyApiKey);   
app.use('/api', router);
// Middleware global para capturar todos os erros
app.use(errorHandler);

export { app };
