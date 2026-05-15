import dotenv from "dotenv";
dotenv.config();
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/user.js";

export async function handleSignup(req, res) {
    try {
        const { first_name, email, password } = req.body;
        if (!first_name || !email || !password) {
            return res.status(400).send("All fields required");
        }
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.send("User already exists");
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
            return res.send("Invalid credentials");
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.send("Invalid credentials");
        }
        console.log(process.env.SECRET_KEY);
        const token = jwt.sign(
            {
                userId: user._id,
                first_name: user.first_name,
                email: user.email,
            },
            process.env.SECRET_KEY,
            { expiresIn: 60 },
        );
        res.cookie("token", token, {
            httpOnly: true,
            maxAge: 60 * 1000,
        });
        return res.redirect("/");
    } catch (error) {
        return res.status(500).send("Login failed");
    }
}

export function handleLogout(req, res) {
    try {
        res.clearCookie("token");
        return res.redirect("/login");
    } catch (error) {
        return res.status(500).send("Logout failed");
    }
}
