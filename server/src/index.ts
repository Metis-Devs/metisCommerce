import express, { Express} from 'express';
import dotenv from 'dotenv';
import "reflect-metadata"
import { AppDataSource } from './config/dbConfig';
import router from './routes/index.routes';
import cors from "cors"

dotenv.config();
const app: Express = express();
const port = process.env.PORT;
app.use(cors({
  origin: [ "http://localhost:3000"],
  methods:["GET","POST","PUT","DELETE","UPDATE"],
}))
app.use(express.json())
app.use("/", router)


app.listen(port, async () => {
  await AppDataSource.initialize();
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});


