import express from "express";
import {
    handleSignup,
    handleLogin,
    handleLogout,
} from "../controllers/auth.js";

const router = express.Router();

router.get("/signup", (req, res) => res.render("signup"));
router.get("/login", (req, res) => res.render("login"));

router.post("/signup", handleSignup);
router.post("/login", handleLogin);
router.post("/logout", handleLogout);

export default router;
