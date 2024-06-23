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

router.route("/").post(createInvoice);
router.route("/").get(verifyJWT, getInvoices);
router.route("/:id").get(getInvoice);
router.route("/:id").put(markAsPaidInvoice);
router.route("/").put(updateInvoice);
router.route("/:id").delete(deleteInvoice);

export default router;
