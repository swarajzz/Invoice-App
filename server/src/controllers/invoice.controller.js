import { Invoice } from "../models/invoice.models.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { User } from "../models/user.models.js";

const getInvoices = asyncHandler(async (req, res) => {
  const invoices = await Invoice.find({ userId: req.user._id });

  return res
    .status(201)
    .json(new ApiResponse(200, invoices, "Invoices fetched successfully"));
});

const getInvoice = asyncHandler(async (req, res) => {
  const invoiceId = req.params.id;

  const selectedInvoice = await Invoice.findOne({
    id: invoiceId,
    userId: req.user._id,
  });

  return res
    .status(201)
    .json(
      new ApiResponse(200, selectedInvoice, "Invoice fetched successfully")
    );
});

const deleteInvoice = asyncHandler(async (req, res) => {
  const invoiceId = req.params.id;

  await Invoice.deleteOne({ id: invoiceId, userId: req.user._id });

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
    submitBtnName,
    status,
  } = req.body;

  const userId = req.user._id;

  const user = await User.findById(userId);

  if (!user) {
    throw new ApiError(404, "User not found");
  }

  let invoiceData = {
    id,
    userId,
    paymentDue,
    description,
    paymentTerms,
    clientName,
    clientEmail,
    senderAddress,
    clientAddress,
    items,
    total,
    // status: submitBtnName === "draft" ? "draft" : "pending",
    status: submitBtnName
      ? submitBtnName === "draft"
        ? "draft"
        : "pending"
      : status,
  };

  const invoice = new Invoice(invoiceData);

  if (submitBtnName === "draft" || status === "draft") {
    await invoice.save({ validateBeforeSave: false });
  } else {
    await invoice.save();
  }

  const createdInvoice = await Invoice.findById(invoice._id).select(
    "+id +status"
  );

  return res
    .status(201)
    .json(new ApiResponse(200, createdInvoice, "Invoice created successfully"));
});

const updateInvoice = asyncHandler(async (req, res) => {
  const invoice = req.body;
  invoice.status = "pending";
  const query = { id: invoice.id, userId: req.user._id };
  const updatedInvoice = await Invoice.findOneAndUpdate(query, invoice, {
    new: true,
  });

  return res
    .status(201)
    .json(new ApiResponse(200, updatedInvoice, "Invoice updated successfully"));
});

const markAsPaidInvoice = asyncHandler(async (req, res) => {
  const invoiceId = req.params.id;

  const query = { id: invoiceId, userId: req.user._id };
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

export {
  createInvoice,
  deleteInvoice,
  getInvoice,
  getInvoices,
  markAsPaidInvoice,
  updateInvoice,
};
