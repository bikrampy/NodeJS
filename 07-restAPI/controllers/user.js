import User from "../models/user.js";

export async function handleGetAllUser(req, res) {
    try {
        const allUsers = await User.find({});
        if (!allUsers || allUsers.length === 0) {
            return res.status(404).json({ Message: "No Users Found" });
        }
        return res.status(200).json(allUsers);
    } catch (error) {
        return res.status(500).json({ Message: "Something went wrong" });
    }
}

export async function handleCreateUser(req, res) {
    try {
        const body = req.body;

        if (
            !body ||
            !body.first_name ||
            !body.last_name ||
            !body.email ||
            !body.gender ||
            !body.city
        ) {
            return res.status(400).json({ Message: "All Fields Are required" });
        }

        const result = await User.create(body);

        return res.status(201).json({
            Message: "User Created Successfully",
            user: result,
        });
    } catch (error) {
        return res.status(500).json({ Message: "Something went wrong" });
    }
}

export async function handleGetUserById(req, res) {
    try {
        const user = await User.findById(req.params.id);

        if (!user) {
            return res.status(404).json({ Message: "User Not Found" });
        }

        return res.status(200).json(user);
    } catch (error) {
        return res.status(400).json({ Message: "Invalid User ID" });
    }
}

export async function handleUpdateUserById(req, res) {
    try {
        const updatedUser = await User.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true },
        );
        if (!updatedUser) {
            return res.status(404).json({ Message: "User Not Found" });
        }
        return res.status(200).json({
            Message: "User Updated Successfully",
            user: updatedUser,
        });
    } catch (error) {
        return res.status(500).json({ Message: "Something went wrong" });
    }
}

export async function handleDeleteUserById(req, res) {
    try {
        const deletedUser = await User.findByIdAndDelete(req.params.id);
        if (!deletedUser) {
            return res.status(404).json({ Message: "User Not Found" });
        }
        return res.status(200).json({
            Message: "User Deleted Successfully",
            user: deletedUser,
        });
    } catch (error) {
        return res.status(500).json({ Message: "Something went wrong" });
    }
}
