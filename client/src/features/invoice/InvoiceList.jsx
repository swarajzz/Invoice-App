import InvoiceItem from "./InvoiceItem";
import styles from "../styles/InvoiceList.module.scss";
import Spinner from "../../ui/Spinner";
import Error from "../../ui/Error";
import empty from "../../assets/empty.svg";

function InvoiceList({ toggleFilterValues, invoices, isLoading, error }) {
  if (isLoading) return <Spinner />;
  if (error) return <Error />;

  const newInvoices = invoices.filter((invoice) =>
    toggleFilterValues.includes(invoice.status)
  );

  return (
    <>
      {invoices.length ? (
        <ul className={styles.invoiceList}>
          {(toggleFilterValues.length ? newInvoices : invoices).map(
            (invoice) => (
              <InvoiceItem key={invoice.id} invoice={invoice} />
            )
          )}
        </ul>
      ) : (
        <div className={styles.empty_box}>
          <img src={empty} alt="No Invoices Image" className={styles.empty_img} />

          <h4>There is nothing here</h4>

          <p>
            Create a new invoice by clicking the <strong>New Invoice</strong> button and get started
          </p>
        </div>
      )}
    </>
  );
}

export default InvoiceList;
