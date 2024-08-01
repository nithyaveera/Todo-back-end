import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectdb from "./database/config.js";
import routes from "./routes/todoroutes.js";

dotenv.config()
const app = express()
const port = process.env.PORT
app.use(cors())
app.use(express.json())

app.use('/todo',routes)
connectdb()
app.listen(port, () => {
    console.log(`${port}`)
})
