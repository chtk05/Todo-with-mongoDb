import { error } from "console";

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const exp = require("constants");
const TodoModel = require("./Model/Todo");

const app = express();
const PORT = 8083;
app.use(cors());
app.use(express());
app.use(express.json());

mongoose.connect(
  "mongodb+srv://aster:VS5EsYYr7YImSzS4@cluster0.jxmnr.mongodb.net/Databases"
);

const db = mongoose.connection;

db.on("error", console.error.bind(console, "Connection error from mongo"));
db.once("open", () => {
  console.log("connect to MongoDB successfully");
});

// app.get("/", (req: any, res: any) => {
//   res.send("This is homepage");
// });

app.get("/get", (req: any, res: any) => {
  TodoModel.find()
    .then((result: any) => res.json(result))
    .catch((err: any) => res.json(err));
});
app.post("/add", (req: any, res: any) => {
  const { task } = req.body;
  if (!task) {
    return res.status(500).json({ err: "Task is undefined" });
  }
  console.log(task);
  TodoModel.create({
    task: task,
  })
    .then((result: any) => res.json(result))
    .catch((err: any) => res.status(400).json(err));
});

app.listen(PORT, () => {
  console.log(`Todolist server listening on port ${PORT}`);
});
