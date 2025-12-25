import express from "express";
import { getAllOrders, markDelivered } from "../controllers/adminOrderController.js";
import { protect, admin } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/orders", protect, admin, getAllOrders);
router.put("/orders/:id/deliver", protect, admin, markDelivered);

export default router;
