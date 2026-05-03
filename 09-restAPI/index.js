import express from "express";
import path from "path";
import ejs from "ejs";
import userRouter from "./routes/user.js";
import apiUserRouter from "./routes/api-user.js";
import { connectMongoDB } from "./connection.js";

const PORT = 8000;
const app = express();

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

connectMongoDB("mongodb://127.0.0.1:27017/rest-api").then((data) => {
    console.log("MongoDB connected successfully.");
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/", userRouter);
app.use("/api/", apiUserRouter);

app.get("/*port", (req, res) => {
    res.status(404).send("<h1>404 Not Found</h1>");
});

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
