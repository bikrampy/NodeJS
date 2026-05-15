import { v4 as uuidv4 } from "uuid";
import bcrypt from "bcrypt";

import { sessions } from "../session.js";
import User from "../models/user.js";

export async function handleSignup(req, res) {
    try {
        const { first_name, email, password } = req.body;
        if (!first_name || !email || !password) {
            return res.status(400).send("All fields required");
        }
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).send("User already exists");
        }
        const hashed_password = await bcrypt.hash(password, 10);
        await User.create({ first_name, email, password: hashed_password });
        return res.redirect("/login");
    } catch (error) {
        return res.status(500).send("Error during signup");
    }
}

export async function handleLogin(req, res) {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).send("Invalid credentials");
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).send("Invalid credentials");
        }
        const sessionId = uuidv4();
        sessions.set(sessionId, {
            user,
            expiresAt: Date.now() + 60 * 1000,
        });
        res.cookie("uid", sessionId, {
            httpOnly: true,
            sameSite: "lax",
            maxAge: 60 * 1000,
        });
        return res.redirect("/");
    } catch (error) {
        return res.status(500).send("Login failed");
    }
}

export function handleLogout(req, res) {
    try {
        const sessionId = req.cookies.uid;
        if (sessionId) {
            sessions.delete(sessionId);
        }
        res.clearCookie("uid");
        return res.redirect("/login");
    } catch (error) {
        return res.status(500).send("Logout failed");
    }
}
