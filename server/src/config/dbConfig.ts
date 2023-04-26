import { DataSource } from "typeorm";
import { config } from "dotenv";
import { User } from "../entity/User";
config(); 

export const AppDataSource = new DataSource({
    type: "mysql",
    host: process.env.DB_HOST,
    port: 3306,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    // synchronize: true,
    logging: false,
    entities: [User],
    subscribers: [],
    migrations: [],
})