import express from "express";
import cookieParser from "cookie-parser";
import path from "path";
import dotenv from "dotenv";
dotenv.config();

import authRoutes from "./routes/auth.js";
import profileRoutes from "./routes/profile.js";
import adminRoutes from "./routes/admin.js";

import { connectMongoDB } from "./connection.js";

import { checkAuth } from "./middlewares/auth.js";
import { checkRole } from "./middlewares/role.js";

const app = express();

connectMongoDB("mongodb://127.0.0.1:27017/authZ-db").then((data) => {
    console.log("MongoDB connected successfully.");
});

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser());

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

app.use("/", authRoutes);
app.use("/", checkAuth, profileRoutes);
app.use("/admin", checkAuth, checkRole("admin"), adminRoutes);

app.listen(8000, () => {
    console.log("Server running on port 8000");
});
