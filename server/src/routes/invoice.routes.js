import { Router } from "express";
import {
  createInvoice,
  deleteInvoice,
  getInvoices,
  getInvoice,
  markAsPaidInvoice,
  updateInvoice,
} from "../controllers/invoice.controller.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = Router();

router.route("/").post(verifyJWT, createInvoice);
router.route("/").get(verifyJWT, getInvoices);
router.route("/:id").get(verifyJWT, getInvoice);
router.route("/:id").put(verifyJWT, markAsPaidInvoice);
router.route("/").put(verifyJWT, updateInvoice);
router.route("/:id").delete(verifyJWT, deleteInvoice);

export default router;
