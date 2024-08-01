import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config()
const connectionstring = process.env.MONGOCONNECTION

const connectdb = async () => {
    try {
        const dbconnection = mongoose.connect(connectionstring)
        console.log("db connected")
        return dbconnection
    } catch (error) {
        console.log("error")
    }
}
export default connectdb;