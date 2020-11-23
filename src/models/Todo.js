import mongoose from "mongoose";

const TodoSchema = mongoose.Schema({
  item: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    required: true,
    default: false,
  },
});

const Todo = mongoose.model("Todo", TodoSchema);

export default Todo;
