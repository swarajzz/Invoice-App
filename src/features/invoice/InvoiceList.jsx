import data from "../../data/data.json";
import InvoiceItem from "./InvoiceItem";

import styles from "../styles/InvoiceList.module.scss";

function InvoiceList() {
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
