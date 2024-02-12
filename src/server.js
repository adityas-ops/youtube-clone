import express from "express";
import connectDB from "./db/index.js";
import dotenv from "dotenv";
dotenv.config();


const app = express();


app.use(express.json());

connectDB();

app.get("", (req, res) => {
  res.send("server is running ");
});

app.listen(4000, () => {
  console.log("server is running on port 4000");
});
