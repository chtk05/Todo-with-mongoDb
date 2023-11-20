import mongoose from "mongoose";

const TodoSchemad = new mongoose.Schema({
  task: String,
  done: {
    type: Boolean,
    default: false,
  },
});

const TodoModel = mongoose.model("Todo-list", TodoSchemad);
module.exports = TodoModel;
