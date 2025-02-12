import express from "express";
import {
  superAdminAction,
  getPendingUsers,
} from "../controllers/userController.js";
import authMiddleware from "../middlewares/authMiddleware.js";

const router = express.Router();

router.get("/superadmin", getPendingUsers);
router.post("/superadmin/action", superAdminAction);

export default router;
