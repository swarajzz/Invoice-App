import axios from "axios";
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export async function getInvoices() {
  const res = await axios.get(`${API_BASE_URL}/api/invoice`);
  const { data: invoices } = res.data;
  return invoices;
}

export async function createInvoice(newInvoice) {
  await axios.post(`${API_BASE_URL}/api/invoice`, newInvoice);
}

export async function updateInvoice(newInvoice) {
  await axios.put(`${API_BASE_URL}/api/invoice`, newInvoice);
}

export async function getInvoice(invoiceId) {
  const res = await axios.get(`${API_BASE_URL}/api/invoice/${invoiceId}`);
  const { data: invoice } = res.data;
  return invoice;
}

export async function markAsPaidInvoice(invoiceId) {
  await axios.put(`${API_BASE_URL}/api/invoice/${invoiceId}`);
}

export async function deleteInvoice(invoiceId) {
  const { data } = await axios.delete(
    `${API_BASE_URL}/api/invoice/${invoiceId}`
  );
  return data;
}
