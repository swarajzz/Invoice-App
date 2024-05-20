import axios from "axios";

export async function getInvoices() {
  const {
    data: { data: invoices },
  } = await axios.get("/api/invoice");

  return invoices;
}
