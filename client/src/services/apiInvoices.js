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
  console.log(invoiceId);
  axios.put(`/api/invoice/${invoiceId}`);
}
