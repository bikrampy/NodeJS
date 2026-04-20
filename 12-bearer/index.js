import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.js";
import profileRoutes from "./routes/profile.js";
import { connectMongoDB } from "./connection.js";

dotenv.config();

const app = express();

app.use(express.json());

connectMongoDB("mongodb://127.0.0.1:27017/bearer-db").then(() =>
    console.log("DB connected"),
);

app.use("/api/auth", authRoutes);
app.use("/api/profile", profileRoutes);

app.listen(8000, () => console.log("Server running"));
