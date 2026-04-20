import express from "express";
import User from "../models/user.js";

const userRouter = express.Router();

userRouter.get("/:id", async (req, res) => {
    let user = await User.findById(req.params.id);
    if (!user) {
        let errorHTML = `
        <p>404 Not Foound</p>
        `;
        return res.status(404).send(errorHTML);
    }
    let html = `
        <h1>${user.first_name} ${user.last_name}</h1>
        <p><a href="mailto:${user.email}">${user.email}</a></p>
        <p>City: ${user.city}</p>
    `;
    res.status(200).send(html);
});

userRouter.get("/", async (req, res) => {
    const allDbUsers = await User.find({});
    let html = `
        <ul>
            ${allDbUsers
                .map((u) => {
                    return `<li>${u.first_name}</li>`;
                })
                .join("")}
        </ul>
    `;
    return res.status(200).send(html);
});

export default userRouter;
