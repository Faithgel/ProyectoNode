import { DataSource } from "typeorm";
import * as dotenv from "dotenv";

//Using the dotenv in src aka the same folder which contains this file using 
dotenv.config( { path: __dirname + "/.env" } );


const port = process.env.DB_PORT ? parseInt(process.env.DB_PORT) : 5432;

export const AppDataSource = new DataSource({
	type: "mysql",
	host: process.env.DB_HOST,
	port: port,
	username: process.env.DB_USER,
	password: process.env.DB_PASS,
	database: process.env.DB_NAME,
	synchronize: true,
	logging: true,
	entities: ["src/models/**/*.ts"],
});
