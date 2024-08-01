import express from "express";
import { createTodo, deleteTodo, EditTodobyId, getTodo } from "../controller/todocontroller.js";

const routes = express.Router()

routes.post("/create", createTodo)
routes.put("/edit/:id", EditTodobyId)
routes.get("/get", getTodo)
routes.delete("/delete/:id", deleteTodo)

export default routes;