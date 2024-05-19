import { Invoice } from "../models/invoice.models.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const createInvoice = asyncHandler(async (req, res) => {
  const {
    id,
    paymentDue,
    description,
    paymentTerms,
    clientName,
    clientEmail,
    senderAddress,
    clientAddress,
    items,
    total,
  } = req.body;

  if (
    [
      id,
      paymentDue,
      description,
      paymentTerms,
      clientName,
      clientEmail,
      senderAddress,
      clientAddress,
      items,
      total,
    ].some((field) => field?.trim === "")
  ) {
    throw new ApiError(400, "All fields are required");
  }

  const invoice = await Invoice.create({
    id,
    paymentDue,
    description,
    paymentTerms,
    clientName,
    clientEmail,
    senderAddress,
    clientAddress,
    items,
    total,
  });

  const createdInvoice = await Invoice.findById(invoice._id).select(
    "+status"
  );
  // console.log(createInvoice)

  return res
    .status(201)
    .json(new ApiResponse(200, createdInvoice, "Invoice created successfully"));
});

export { createInvoice };
