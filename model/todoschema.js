import mongoose from "mongoose";

const todoschema = new mongoose.Schema({
    title: String,
    description:String
})

const Todo = mongoose.model("Todos", todoschema)
export default Todo;