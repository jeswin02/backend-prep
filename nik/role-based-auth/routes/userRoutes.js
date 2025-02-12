import express from "express";
import { superAdminAction } from "../controllers/userController.js";
import authMiddleware from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post(
  "/superadmin/action",
  // authMiddleware(["superadmin"]),
  superAdminAction
);
router.post(
  "/superadmin/deactivate",
  authMiddleware(["superadmin"]),
  superAdminAction
);

export default router;
