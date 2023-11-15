import mongoose from "mongoose";

const TodoSchemad = new mongoose.Schema({
  task: String,
});

const TodoModel = mongoose.model("Todo-list", TodoSchemad);
module.exports = TodoModel;
