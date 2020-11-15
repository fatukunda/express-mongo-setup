import Todo from "../models/Todo";

const createTodo = async (req, res) => {
  const { body } = req;
  const todo = new Todo(body);
  await todo.save();
  return res.status(201).send(todo);
};

export { createTodo };
