import axios from "axios";

export async function getInvoices() {
  const {
    data: { data: invoices },
  } = await axios.get("/api/invoice");

  return invoices;
}

export async function createInvoice(newInvoice) {
  axios.post("/api/invoice", newInvoice);
}

export async function markAsPaidInvoice(invoiceId) {
  axios.put(`/api/invoice/${invoiceId}`);
}

export async function deleteInvoice(invoiceId) {
  console.log(invoiceId)
  axios.delete(`/api/invoice/${invoiceId}`);
}
