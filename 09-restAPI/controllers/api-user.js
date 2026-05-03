import User from "../models/user.js";

export async function handleGetAllUser(req, res) {
    try {
        const allUsers = await User.find({});
        if (!allUsers || allUsers.length === 0) {
            return res.status(404).json({ Message: "No user found" });
        }
        return res.status(200).json(allUsers);
    } catch (error) {
        return res.status(500).json({ Message: "Something went wrong" });
    }
}

export async function handleGetUserById(req, res) {
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            return res.status(404).json({ Message: "User not found" });
        }
        return res.status(200).json(user);
    } catch (error) {
        return res.status(400).json({ Message: "Invalid user id" });
    }
}
