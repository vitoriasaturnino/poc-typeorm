import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "babar.db.elephantsql.com",
    port: 5432,
    username: "dlcfpzfp",
    password: "nbCS0Wrxv08YNrwwaM7b2vezxselrzRe",
    database: "dlcfpzfp",
    synchronize: true,
    logging: true,
    entities: [],
    subscribers: [],
    migrations: ["src/database/migrations/*.ts"],
})

AppDataSource.initialize()
    .then(() => console.log("Datasource inicializado"))
    .catch(e => console.log(e.message))