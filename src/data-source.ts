import "reflect-metadata"
import { DataSource } from "typeorm"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "cbadmin",
    password: "adminpassword",
    database: "twitter",
    synchronize: true,
    logging: false,
    entities: ["dist/**/entity/**"],
    migrations: ["src/**/migrations/**"],
    subscribers: [],
})
