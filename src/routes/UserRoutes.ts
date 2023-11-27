import { Router } from "express";
import UserController from "../controller/UserController"

const UserRouter = Router();

UserRouter.get("/user", UserController.list);

UserRouter.post("/user/insert", UserController.insert)

UserRouter.patch("/user/update/:usuarioId", UserController.update);

UserRouter.delete("/user/delete/:usuarioId", UserController.delete);

export default UserRouter;