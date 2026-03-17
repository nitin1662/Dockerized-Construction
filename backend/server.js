import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import router from "./routes/roommatesrouter.js";
dotenv.config();
const app = express();
app.use(cors());

console.log("hello")
app.use(express.json());

app.use((req, res, next) => {
  console.log("➡️ Request:", req.method, req.url);
  next();
});

app.use("/api/roommates", router);
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ MongoDB Connected");
  })
  .catch((err) => console.error(err));

app.listen(5000, () => console.log("🚀 Server running on port 5000"));

