import { Router } from "express";
import LeilaoController from "../controller/LeilaoController"

const LeilaoRouter = Router();

LeilaoRouter.get("/leilao", LeilaoController.listLeiloes);

LeilaoRouter.post("/leilao/insert", LeilaoController.createLeilao)

LeilaoRouter.patch("/leilao/update/:leilaoId", LeilaoController.updateLeilao);

LeilaoRouter.delete("/leilao/delete/:leilaoId", LeilaoController.deleteLeilao);

export default LeilaoRouter;