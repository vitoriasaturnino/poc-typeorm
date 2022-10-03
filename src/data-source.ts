import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "postgres",
    database: "db_poc",
    synchronize: true,
    logging: true,
    entities: [],
    subscribers: [],
    migrations: ["src/database/migrations/*.ts"],
})

AppDataSource.initialize()
    .then(() => console.log("Datasource inicializado"))
    .catch(e => console.log(e.message))