import { Router } from "express";
import turnController from "../controllers/turns_controller.js";
import authVerify from "../middleware/authVerify.js";

const router = Router();

/**
 * Crear un turno
 */
router.post("/", authVerify.verifyToken, turnController.createTurn);

export default router;