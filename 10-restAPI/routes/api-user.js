import express from "express";
import {
    handleGetAllUser,
    handleGetUserById,
} from "../controllers/api-user.js";

const apiUserRouter = express.Router();

apiUserRouter.route("/users").get(handleGetAllUser);
apiUserRouter.route("/:id").get(handleGetUserById);

export default apiUserRouter;
