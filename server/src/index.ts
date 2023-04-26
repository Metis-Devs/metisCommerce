import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import "reflect-metadata"
import { AppDataSource } from './config/dbConfig';

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.get('/', (_req: Request, res: Response) => {
  res.send('Express + TypeScript Server!!');
});

app.listen(port, async () => {
  await AppDataSource.initialize();
  
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});