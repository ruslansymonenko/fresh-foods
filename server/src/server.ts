import express, {Express} from 'express';
import dotenv from 'dotenv';

import { LoggerService } from './logger/logger.service';

dotenv.config();

const app: Express = express();
const PORT: number = 8000;

const logger = new LoggerService();

app.use(express.json());

app.listen(PORT, () => {
  logger.log(`Server was started on port ${PORT} . . .`);
})

