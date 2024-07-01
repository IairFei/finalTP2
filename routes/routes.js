import { Router } from "express";
import SondaController from "../controllers/SondaController.js";
import { notIdValid, notValidSonda } from "../Middleware/notValidSonda.middleware.js";

const routes = Router();

const sondaController = new SondaController();

routes.post("/", notValidSonda, sondaController.createSonda);

routes.get("/", sondaController.getSondas);

routes.get("/:id", notIdValid, sondaController.getSondaById);

export default routes;
