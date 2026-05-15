import express from "express";

import userRoutes from "./routes/user.routes.js";

const app = express();

app.use("/api/users", userRoutes);
app.listen(8000, () => {
    console.log("Server started on port 8000");
});
