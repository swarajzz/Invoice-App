import { useParams } from "react-router-dom";
import InvoiceDetail from "../features/invoice/InvoiceDetail";
import NotFound from "./Error";
import Spinner from "./Spinner";
import { getInvoice } from "../services/apiInvoices";
import { useQuery } from "@tanstack/react-query";

function InvoicePage() {
  const params = useParams();
  const id = params.id.replace(":", "");

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
