require("dotenv").config();
const express = require("express");
const { Router } = require("express");
const User = require("./models/users");

const app = express();
const routes = Router();
const PORT = 3333;

app.use(express.json());

routes.get("/users", async (_, res) => {
  const users = await User.selectUsers();
  res.send(users);
});

routes.post("/users", async (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res.status(400).send({ message: "invalid request" });
  }
  await User.createUser(name);
  res.status(201).send();
});

routes.delete("/users/:id", async (req, res) => {
  const { id } = req.params;
  if (!id) {
    return res.status(400).send({ message: "invalid request" });
  }
  const user = await User.findUserById(id);
  if (!user.length) {
    return res.status(400).send({ message: "user not found" });
  }
  await User.deleteUser(id);
  res.status(203).send();
});

app.use(routes);

app.listen(PORT, () => console.log(`running on ${PORT}`));
