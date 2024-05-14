import data from "../../data/data.json";
import InvoiceItem from "./InvoiceItem";

import styles from "../styles/InvoiceList.module.scss";
import { useQuery } from "@tanstack/react-query";
import { getInvoices } from "../../services/apiInvoices";

function InvoiceList() {
  const {
    isLoading,
    data: invoices,
    error,
  } = useQuery({
    queryKey: ["invoice"],
    queryFn: getInvoices,
  });

  if (isLoading) alert("Loading...");
  console.log(invoices);

  return (
    <>
      <ul className={styles.invoiceList}>
        {data.map((invoice) => (
          <InvoiceItem key={invoice.id} invoice={invoice} />
        ))}
      </ul>
    </>
  );
}

export default InvoiceList;
