import express from "express";
import { handleWelcomePage } from "../controllers/profile.js";

const router = express.Router();

router.get("/", handleWelcomePage);

export default router;
