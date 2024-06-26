import axios from "axios";
import createAuthRefreshInterceptor from "axios-auth-refresh";
import refreshAuth from "./refreshAuth";
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

// export async function getInvoices() {
//   const res = await axios.get(`${API_BASE_URL}/api/invoice`);
//   const { data: invoices } = res.data;
//   return invoices;
// }

const apiClient = axios.create({
  baseURL: "http://localhost:5173",
  withCredentials: true,
});

createAuthRefreshInterceptor(apiClient, refreshAuth, {
  statusCodes: [401],
  pauseInstanceWhileRefreshing: true,
});

export async function getInvoices() {
  const res = await apiClient.get(`/api/invoice`, {
    // headers: {"Authorization" : `Bearer ${accessTpel}`}
  });
  const { data: invoices } = res.data;
  return invoices;
}

export async function createInvoice(newInvoice) {
  await apiClient.post(`/api/invoice`, newInvoice);
}

export async function updateInvoice(newInvoice) {
  await apiClient.put(`/api/invoice`, newInvoice);
}

export async function getInvoice(invoiceId) {
  const res = await apiClient.get(`/api/invoice/${invoiceId}`);
  const { data: invoice } = res.data;
  return invoice;
}

export async function markAsPaidInvoice(invoiceId) {
  await apiClient.put(`/api/invoice/${invoiceId}`);
}

export async function deleteInvoice(invoiceId) {
  const { data } = await apiClient.delete(`/api/invoice/${invoiceId}`);
  return data;
}
