const database = require("../database");

async function selectUsers() {
  const db = await database.connect();
  const [rows] = await db.query("SELECT * FROM users");
  return rows;
}

async function createUser(name) {
  const db = await database.connect();
  const sql = "INSERT INTO users(name) VALUES(?);";
  const values = [name];
  await db.query(sql, values);
}

async function findUserById(id) {
  const db = await database.connect();
  const sql = "SELECT id FROM users WHERE id=?";
  const value = [id];
  const [rows] = await db.query(sql, value);
  return rows;
}

async function deleteUser(id) {
  const db = await database.connect();
  const sql = "DELETE FROM users WHERE id=?;";
  const value = [id];
  await db.query(sql, value);
}

module.exports = Object.freeze({
  selectUsers,
  createUser,
  findUserById,
  deleteUser,
});
