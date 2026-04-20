import express from "express";
import userRouter from "./routes/user.js";
import apiUserRouter from "./routes/api-user.js";
import { connectMongoDB } from "./connection.js";

const PORT = 8000;
const app = express();

connectMongoDB("mongodb://127.0.0.1:27017/rest-api").then((data) => {
    console.log("MongoDB connected successfully.");
});

app.use(express.urlencoded({ extended: false }));

app.use("/users", userRouter);

app.use("/api/users", apiUserRouter);

app.get("/*port", (req, res) => {
    res.status(404).send("<h1>404 Not Found</h1>");
});

app.listen(PORT, () => {
    console.log(`Server Started On Port ${PORT}`);
});
