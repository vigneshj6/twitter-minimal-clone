import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "cbadmin",
    password: "adminpassword",
    database: "twitter",
    synchronize: true,
    logging: false,
    entities: ["src/**/entity/**"],
    migrations: [],
    subscribers: [],
})
