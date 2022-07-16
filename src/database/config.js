require("dotenv").config();
const mysql2 = require("mysql2");
const migration = require("mysql-migrations");

const { DB_USERNAME, DB_PASSWORD, DB_HOST, DB_PORT, DB_DATABASE } = process.env;

const connection = mysql2.createPool({
  connectionLimit: 10,
  host: DB_HOST,
  port: DB_PORT,
  user: DB_USERNAME,
  password: DB_PASSWORD,
  database: DB_DATABASE,
});

migration.init(connection, __dirname + "/migrations", () =>
  console.log("finished running migrations")
);
