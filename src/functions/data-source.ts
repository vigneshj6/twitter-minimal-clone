import "reflect-metadata"
import { DataSource } from "typeorm"
export const AppDataSource = new DataSource({
    type: "postgres",
    host: process.env.databaseHost,
    port: 5432,
    username: process.env.databaseUser,
    password: process.env.databasePassword,
    database: process.env.databaseName,
    synchronize: true,
    logging: false,
    entities: ["dist/**/entity/**"],
    migrations: ["src/**/migrations/**"],
    subscribers: [],
})
