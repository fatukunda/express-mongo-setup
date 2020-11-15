import mongoose from "mongoose";

const TodoSchema = mongoose.Schema({
  text: {
    type: String,
    required: true,
  },
  isCompleted: {
    type: String,
    required: true,
    default: false,
  },
});

const Todo = mongoose.model("Todo", TodoSchema);

export default Todo;
