import axios from "axios";

export async function getInvoices() {
  const {
    data: { data: invoices },
  } = await axios.get("/api/invoice");

  return invoices;
}

export async function createInvoice(newInvoice) {
  await axios.post("/api/invoice", newInvoice);
}

export async function getInvoice(invoiceId) {
  const {
    data: { data: invoice },
  } = await axios.get(`/api/invoice/${invoiceId}`);

  return invoice;
}

export async function markAsPaidInvoice(invoiceId) {
  await axios.put(`/api/invoice/${invoiceId}`);
}

export async function deleteInvoice(invoiceId) {
  const { data } = await axios.delete(`/api/invoice/${invoiceId}`);
  return data;
}
