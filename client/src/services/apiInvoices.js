import axios from "axios";
import createAuthRefreshInterceptor from "axios-auth-refresh";
import refreshAuth from "./refreshAuth";
const API_BASE_URL = import.meta.env.VITE_APP_BASE_URL;

export const apiClient = axios.create({
  baseURL: { API_BASE_URL },
  withCredentials: true,
});

const axiosInstance = axios.create({
  withCredentials: true,
});

createAuthRefreshInterceptor(apiClient, refreshAuth, {
  statusCodes: [401],
  pauseInstanceWhileRefreshing: true,
});

export async function getInvoices() {
  const res = await axiosInstance.get(`${API_BASE_URL}/api/invoice`);
  const { data: invoices } = res.data;
  return invoices;
}

export async function createInvoice(newInvoice) {
  await apiClient.post(`${API_BASE_URL}/api/invoice`, newInvoice);
}

export async function updateInvoice(updatedInvoice) {
  await apiClient.put(`${API_BASE_URL}/api/invoice`, updatedInvoice);
}

export async function getInvoice(invoiceId) {
  const res = await apiClient.get(`${API_BASE_URL}/api/invoice/${invoiceId}`);
  const { data: invoice } = res.data;
  return invoice;
}

export async function markAsPaidInvoice(invoiceId) {
  await apiClient.put(`${API_BASE_URL}/api/invoice/${invoiceId}`);
}

export async function deleteInvoice(invoiceId) {
  const { data } = await apiClient.delete(`${API_BASE_URL}/api/invoice/${invoiceId}`);
  return data;
}
