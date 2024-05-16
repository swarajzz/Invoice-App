import mongoose from "mongoose";

const invoiceSchema = new Schema(
  {
    id: { type: String, required: true },
    paymentDue: { type: Date, required: true },
    description: { type: String, required: true },
    paymentTerms: { type: Number, enum: [1, 7, 14, 30], required: true },
    clientName: { type: String, required: true },
    clientEmail: { type: String, required: true },
    status: {
      type: String,
      enum: ["paid", "pending", "draft"],
      default: "pending",
    },
    senderAddress: {
      street: { type: String, required: true },
      city: { type: String, required: true },
      postCode: { type: String, required: true },
      country: { type: String, required: true },
    },
    clientAddress: {
      street: { type: String, required: true },
      city: { type: String, required: true },
      postCode: { type: String, required: true },
      country: { type: String, required: true },
    },
    items: [
      {
        name: { type: String, required: true },
        quantity: { type: Number, required: true },
        price: { type: Number, required: true },
        total: { type: Number, required: true },
      },
    ],
    total: { type: Number, required: true },
  },
  { timeStamps: true }
);

export const Invoice = mongoose.model("Invoice", invoiceSchema);
