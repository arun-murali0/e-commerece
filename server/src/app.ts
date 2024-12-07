import express from 'express';
import { errorHandler } from './utils/errorHandler';
const app = express();





// error handler
app.use(errorHandler)

export { app };
