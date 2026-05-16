import express from "express";
import { handleDeleteUser } from "../controllers/admin.js";

const router = express.Router();

router.delete("/user/:id", handleDeleteUser);

export default router;
