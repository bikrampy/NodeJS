import express from "express";
import User from "../models/user.js";
import {
    getAllUser,
    getUserById,
    getCreateUser,
    postCreateUser,
    getUpdateUserById,
    postUpdateUserById,
    deleteUserById,
} from "../controllers/user.js";

const userRouter = express.Router();

userRouter.get("/", getAllUser);
userRouter.get("/create-new-user", getCreateUser);
userRouter.post("/create-new-user", postCreateUser);
userRouter.get("/update-user/:id", getUpdateUserById);
userRouter.post("/update-user/:id", postUpdateUserById);
userRouter.post("/delete-user/:id", deleteUserById);
userRouter.get("/:id", getUserById);

export default userRouter;
