import InvoiceItem from "./InvoiceItem";
import styles from "../styles/InvoiceList.module.scss";
import { useQuery } from "@tanstack/react-query";
import { getInvoices } from "../../services/apiInvoices";
import Spinner from "../../ui/Spinner";
import NotFound from "../../ui/Error";

function InvoiceList() {
  const {
    isLoading,
    data: invoices,
    error,
  } = useQuery({
    queryKey: ["invoice"],
    queryFn: getInvoices,
  });

  if (isLoading) return <Spinner />;
  if (error) return <NotFound />;
  
  return (
    <>
      <ul className={styles.invoiceList}>
        {invoices.map((invoice) => (
          <InvoiceItem key={invoice.id} invoice={invoice} />
        ))}
      </ul>
    </>
  );
}

export default InvoiceList;
