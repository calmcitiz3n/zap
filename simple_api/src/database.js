import { Sequelize } from "sequelize";
import { config } from "dotenv";
import * as uuid from "uuid";
config();

export const database = new Sequelize({
  host: "localhost",
  port: process.env.DB_PORT,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  dialect: "postgres",
});

/**
 * @param { Boolean } force
 * @param {Sequelize} db
 */
export async function initPostgresConnection(force, db) {
  try {
    await db.sync({
      force,
      logging: false,
    });

    console.log("Db connected successfully");
  } catch (err) {
    throw err;
  }
}
