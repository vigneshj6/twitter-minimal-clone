import "reflect-metadata"
import { DataSource } from "typeorm"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: process.env.databaseHost || "localhost",
    port: 5432,
    username: process.env.databaseUser || "cbadmin",
    password: process.env.databasePassword || "adminpassword",
    database: process.env.databaseName || "twitter",
    synchronize: false,
    logging: false,
    entities: ["dist-functions/entity/**"],
    migrations: ["dist-functions/migrations/**"],
    subscribers: [],
})
