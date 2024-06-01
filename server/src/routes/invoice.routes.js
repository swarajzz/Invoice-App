import { Router } from "express";
import {
  createInvoice,
  getInvoices,
  markAsPaidInvoice,
} from "../controllers/invoice.controller.js";

const router = Router();

router.route("/").post(createInvoice);
router.route("/").get(getInvoices);
router.route("/:id").put(markAsPaidInvoice);

export default router;
