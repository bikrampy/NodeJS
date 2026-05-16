import express from "express";
import { checkAuth } from "../middleware/auth.js";

const router = express.Router();

router.get("/", (req, res) => {
    console.log("GET Request Received");
    console.log(req.user);
    res.json({
        message: "Welcome to profile",
        user: req.user,
    });
});

export default router;
