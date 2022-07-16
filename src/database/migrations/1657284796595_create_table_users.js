module.exports = {
  up: "CREATE TABLE users (id int NOT NULL AUTO_INCREMENT PRIMARY KEY, name varchar(100))",
  down: "DROP TABLE users",
};
