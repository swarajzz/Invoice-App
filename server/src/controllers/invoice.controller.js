import { Invoice } from "../models/invoice.models.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const getInvoices = asyncHandler(async (req, res) => {
  const allInvoices = await Invoice.find().select();

  return res
    .status(201)
    .json(new ApiResponse(200, allInvoices, "Invoices fetched successfully"));
});

const deleteInvoice = asyncHandler(async (req, res) => {
  const invoiceId = req.params.id;

  await Invoice.deleteOne({ id: invoiceId });
  
  return res
    .status(201)
    .json(new ApiResponse(200, "Invoice deleted successfully"));
});

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
    "+id +status"
  );
  // console.log(createInvoice)

  return res
    .status(201)
    .json(new ApiResponse(200, createdInvoice, "Invoice created successfully"));
});

const markAsPaidInvoice = asyncHandler(async (req, res) => {
  const invoiceId = req.params.id;

  const query = { id: invoiceId };
  const updatedInvoice = await Invoice.findOneAndUpdate(
    query,
    {
      $set: { status: "paid" },
    },
    { new: true }
  );

  return res
    .status(201)
    .json(
      new ApiResponse(
        200,
        updatedInvoice,
        "Invoice updated to paid successfully"
      )
    );
});

export { createInvoice, deleteInvoice, getInvoices, markAsPaidInvoice };
