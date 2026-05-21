import dotenv from "dotenv";
dotenv.config();

import express from "express";
import ejs from "ejs";
import path from "path";
import fs from "fs";
import multer from "multer";

import upload from "./config/multer.js";
import cloudinary from "./config/cloudinary.js";

const PORT = 8000;
const app = express();

app.set("view engine", "ejs");
app.set("views", path.resolve("views"));

app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
    res.render("home");
});

app.post("/upload", (req, res) => {
    upload.single("avatar")(req, res, async function (err) {
        if (err) {
            return res.status(400).send(err.message);
        }
        try {
            const result = await cloudinary.uploader.upload(req.file.path, {
                folder: "test",
            });
            return res.json(result);
        } catch (error) {
            return res.status(500).send("Upload failed");
        } finally {
            if (req.file?.path) {
                fs.unlinkSync(req.file.path);
            }
        }
    });
});

app.listen(PORT, () => {
    console.log(`Server started on Port ${PORT}`);
});
