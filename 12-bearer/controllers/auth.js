import User from "../models/user.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export async function handleSignup(req, res) {
    try {
        const { first_name, email, password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        await User.create({
            first_name,
            email,
            password: hashedPassword,
        });
        res.send("User created");
    } catch (error) {
        res.status(500).send("Signup error");
    }
}

export async function handleLogin(req, res) {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user) return res.status(400).send("Invalid credentials");
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).send("Invalid credentials");
        const token = jwt.sign(
            {
                userId: user._id,
                email: user.email,
            },
            process.env.JWT_SECRET,
            { expiresIn: "1h" },
        );
        res.json({ token });
    } catch (error) {
        res.status(500).send("Login error");
    }
}
