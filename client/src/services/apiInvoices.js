import axios from "axios";

export async function getInvoices() {
  const { data } = await axios.get("/api/invoices");
  return data;
}
