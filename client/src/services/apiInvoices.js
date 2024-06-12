import axios from "axios";

export async function getInvoices() {
  const res = await axios.get("/api/invoice");
  const { data: invoices } = res.data;
  return invoices;
}

export async function createInvoice(newInvoice) {
  await axios.post("/api/invoice", newInvoice);
}

export async function updateInvoice(newInvoice) {
  await axios.put("/api/invoice", newInvoice);
}

export async function getInvoice(invoiceId) {
  const res = await axios.get(`/api/invoice/${invoiceId}`);
  const { data: invoice } = res.data;
  return invoice;
}

export async function markAsPaidInvoice(invoiceId) {
  await axios.put(`/api/invoice/${invoiceId}`);
}

export async function deleteInvoice(invoiceId) {
  const { data } = await axios.delete(`/api/invoice/${invoiceId}`);
  return data;
}
