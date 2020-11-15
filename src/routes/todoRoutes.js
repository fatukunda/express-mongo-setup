import { Router } from "express";
import { createTodo } from "../controllers/todoControllers";

const router = Router();

router.post("/todos", createTodo);

export default router;
