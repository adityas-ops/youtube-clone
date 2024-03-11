import connectDB from "./db/index.js";
import dotenv from "dotenv";
import { app } from "./app.js";
dotenv.config();






connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8080, ()=> console.log(`Server is running on port ${process.env.PORT}`))
})
.catch((error)=> console.log(error))

