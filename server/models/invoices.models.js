import mongoose from "mongoose";

const invoiceSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    subInvoices: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "SubInvoice",
      },
    ], // Array of Invoices
  },
  { timestamps: true }
);

export const Invoice = mongoose.model("Invoice", invoiceSchema);
