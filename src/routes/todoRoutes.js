import { Router } from "express";
import { createTodo, fetchAllTodos, completeTodo, removeTodo } from "../controllers/todoControllers";

const router = Router();

router.post("/todos", createTodo);
router.get("/todos", fetchAllTodos);
router.patch("/todos/:id", completeTodo);
router.delete("/todos/:id", removeTodo);

export default router;
