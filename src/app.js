import express from "express";
import todoRoutes from "./routes/todoRoutes";
require("dotenv").config();
require('./database');

const app = express();

app.use(express.json());
app.use(todoRoutes);

app.get("/", (req, res) => {
  res.status(200).send({ message: "API is live!" });
});

export default app;
