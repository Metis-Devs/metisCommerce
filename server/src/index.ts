import express, { Express} from 'express';
import dotenv from 'dotenv';
import "reflect-metadata"
import { AppDataSource } from './config/dbConfig';
import router from './routes/index.routes';

dotenv.config();
const app: Express = express();
const port = process.env.PORT;

app.use(express.json())
app.use("/", router)

app.listen(port, async () => {
  await AppDataSource.initialize();
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});


