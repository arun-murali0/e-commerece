import express from 'express';
import { DatabaseConnection } from './db';

const app = express();

DatabaseConnection();

export { app };
