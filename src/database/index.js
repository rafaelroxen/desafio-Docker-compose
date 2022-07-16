const mysql = require("mysql2/promise");
require("dotenv").config();

const { DB_USERNAME, DB_PASSWORD, DB_HOST, DB_PORT, DB_DATABASE } = process.env;

async function connect() {
  if (global.connection && global.connection.state !== "disconnected")
    return global.connection;

  const connection = await mysql.createConnection(
    `mysql://${DB_USERNAME}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_DATABASE}`
  );

  global.connection = connection;
  return connection;
}

module.exports = Object.freeze({
  connect,
});
