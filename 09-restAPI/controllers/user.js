import User from "../models/user.js";

export async function getAllUser(req, res) {
    try {
        const allDbUsers = await User.find({});
        if (!allDbUsers) {
            return res.status(404).send("No user found");
        }
        return res.status(200).render("allusers", { users: allDbUsers });
    } catch (error) {
        return res.status(500).send("Something went wrong");
    }
}

export async function getCreateUser(req, res) {
    try {
        return res.status(200).render("createuser");
    } catch (error) {
        return res.status(500).send("Something went wrong");
    }
}

export async function postCreateUser(req, res) {
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
            return res.status(400).send("All fields are required");
        }
        const result = await User.create(body);
        return res.status(201).redirect("/");
    } catch (error) {
        return res.status(500).send("Something went wrong");
    }
}

export async function getUserById(req, res) {
    try {
        let user = await User.findById(req.params.id);
        if (!user) {
            return res.status(404).send("No user found");
        }
        res.status(200).render("singleuser", { user: user });
    } catch (error) {
        return res.status(500).send("Something went wrong");
    }
}

export async function getUpdateUserById(req, res) {
    try {
        const user = await User.findById(req.params.id);
        if (!user) return res.status(404).send("User not found");
        return res.status(200).render("updateuserbyid", {
            user: user,
        });
    } catch (error) {
        return res.status(500).send("Something went wrong");
    }
}

export async function postUpdateUserById(req, res) {
    try {
        const updatedUser = await User.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true },
        );
        if (!updatedUser) {
            return res.status(404).send("User not found");
        }
        return res.status(200).redirect("/");
    } catch (error) {
        return res.status(500).send("Something went wrong");
    }
}

export async function deleteUserById(req, res) {
    try {
        const deletedUser = await User.findByIdAndDelete(req.params.id);
        if (!deletedUser) {
            return res.status(404).send("User not found");
        }
        return res.status(200).redirect("/");
    } catch (error) {
        return res.status(500).send("Something went wrong");
    }
}
