import mongoose from "mongoose";

const generateRandomPrefix = () => {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let prefix = "";
  for (let i = 0; i < 2; i++) {
    const randomIndex = Math.floor(Math.random() * letters.length);
    prefix += letters[randomIndex];
  }
  return prefix;
};

const generateCustomId = () => {
  const prefix = generateRandomPrefix();
  const randomNumber = Math.floor(1000 + Math.random() * 9000); 
  return `${prefix}${randomNumber}`;
};

const invoiceSchema = new mongoose.Schema(
  {
    id: { type: String, default: generateCustomId, required: true },
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
  { timestamps: true }
);

export const Invoice = mongoose.model("Invoice", invoiceSchema);
