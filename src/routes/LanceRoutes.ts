import { Router } from "express";
import LanceController from "../controller/LanceController"

const LanceRouter = Router();

LanceRouter.get("/lance", LanceController.listLance);

LanceRouter.post("/lance/insert", LanceController.createLance)

LanceRouter.patch("/lance/update/:lanceId", LanceController.updateLance);

LanceRouter.delete("/lance/delete/:lanceId", LanceController.deleteLance);

export default LanceRouter;