import express from "express";
import {
    handleGetAllUser,
    handleCreateUser,
    handleGetUserById,
    handleUpdateUserById,
    handleDeleteUserById,
} from "../controllers/user.js";

const apiUserRouter = express.Router();

apiUserRouter
    .route("/:id")
    .get(handleGetUserById)
    .patch(handleUpdateUserById)
    .delete(handleDeleteUserById);

apiUserRouter.route("/").get(handleGetAllUser).post(handleCreateUser);

export default apiUserRouter;
