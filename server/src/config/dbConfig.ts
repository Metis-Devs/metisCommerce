import { DataSource } from "typeorm";
// import dotenv from 'dotenv';

export const AppDataSource = new DataSource({
    type: "mysql",
    host: process.env.HOST,
    port: 3306,
    username: process.env.USERNAME,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    synchronize: true,
    logging: false,
    // entities: [],
    subscribers: [],
    migrations: [],
})