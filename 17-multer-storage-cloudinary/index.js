import dotenv from "dotenv";
dotenv.config();

import express from "express";
import ejs from "ejs";
import path from "path";
import fs from "fs";
import multer from "multer";

import { upload } from "./config/multer.js";
import cloudinary from "./config/cloudinary.js";

const PORT = 8000;
const app = express();

app.set("view engine", "ejs");
app.set("views", path.resolve("views"));

app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
    res.render("home");
});

app.post("/upload", upload.single("avatar"), (req, res) => {
    return res.send(req.file);
});

app.listen(PORT, () => {
    console.log(`Server started on Port ${PORT}`);
});
