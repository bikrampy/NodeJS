import express from "express";
import dotenv from "dotenv";
dotenv.config();

import authRoutes from "./routes/auth.js";
import profileRoutes from "./routes/profile.js";

import { checkAuth } from "./middleware/auth.js";

import { connectMongoDB } from "./connection.js";

const app = express();

app.use(express.json());

connectMongoDB("mongodb://127.0.0.1:27017/bearer-db").then(() =>
    console.log("DB connected"),
);

app.use("/api/auth", authRoutes);
app.use("/api/profile", checkAuth, profileRoutes);

app.listen(8000, () => console.log("Server running"));
