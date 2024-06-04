import { useState } from "react";
import InvoiceHeading from "./InvoiceHeading";
import InvoiceList from "./InvoiceList";
import { getInvoices } from "../../services/apiInvoices";
import { useQuery } from "@tanstack/react-query";

function InvoiceMain() {
  const [toggleFilterValues, setToggleFilterValues] = useState([]);

  const {
    isLoading,
    data: invoices,
    error,
  } = useQuery({
    queryKey: ["invoices"],
    queryFn: getInvoices,
  });

  return (
    <>
      <InvoiceHeading
        setToggleFilterValues={setToggleFilterValues}
        isLoading={isLoading}
        invoices={invoices}
      />
      <InvoiceList
        isLoading={isLoading}
        error={error}
        invoices={invoices}
        toggleFilterValues={toggleFilterValues}
      />
    </>
  );
}

export default InvoiceMain;
