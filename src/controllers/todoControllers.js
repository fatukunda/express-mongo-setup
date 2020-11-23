import Todo from "../models/Todo";

// Create a new todo and save it to the database
const createTodo = async (req, res) => {
  const { body } = req;
  const todo = new Todo(body);
  await todo.save();
  return res.status(201).send(todo);
};

// View all my todos
const fetchAllTodos = async (req, res) => {
  const todos = await Todo.find({});
  return res.status(200).send(todos);
};

// Update todo completed status
const completeTodo = async (req, res) => {
  const { id } = req.params;
  const changedTodo = await Todo.findById(id);
  if (!changedTodo) {
    return res
      .status(404)
      .send({ error: "The todo you are searching for was not found." });
  }
  changedTodo.completed = !changedTodo.completed;
  await changedTodo.save();
  return res.status(200).send({
    message: "Todo updated successfully!",
    data: changedTodo,
  });
};

// Delete a todo
const removeTodo = async (req, res) => {
  const { id } = req.params;
  const todo = await Todo.findById(id);
  if (!todo) {
    return res
      .status(404)
      .send({ error: "The todo you are serching for was not found." });
  }
  await todo.deleteOne(todo);
  return res
    .status(200)
    .send({ message: `Todo ${todo.item} has been successfully deleted.` });
};

export { createTodo, fetchAllTodos, completeTodo, removeTodo };
