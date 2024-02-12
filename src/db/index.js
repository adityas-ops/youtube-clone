import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

export const  connectDB= async ()=> {
try {
  const connection =  await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}` )
  console.log(`Database connected to ${connection.connection.host}`)
} catch (error) {
    console.error("Error connecting to the database", error)
    process.exit(1)
}
}


export default  connectDB