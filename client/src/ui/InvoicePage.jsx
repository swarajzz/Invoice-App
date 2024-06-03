import { useLocation } from "react-router-dom";
import InvoiceDetail from "../features/invoice/InvoiceDetail";
import NotFound from "./Error";
import Spinner from "./Spinner";
import { getInvoice } from "../services/apiInvoices";
import { useQuery } from "@tanstack/react-query";

function InvoicePage() {
  const { state } = useLocation();
  const { id } = state;

  const {
    isLoading,
    data: invoice,
    error,
  } = useQuery({
    queryKey: ["invoice", id],
    queryFn: () => getInvoice(id),
  });

  if (isLoading) return <Spinner />;

  if (error) return <NotFound />;

  return (
    <>
      <InvoiceDetail invoice={invoice} />
    </>
  );
}

export default InvoicePage;
