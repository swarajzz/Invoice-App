import styles from "../styles/InvoiceItem.module.scss";
import rightArrow from "../../assets/icon-arrow-right.svg";

function InvoiceItem({ invoice }) {
  const { id, clientName, paymentDue, total, status } = invoice;
  return (
    <li className={styles.invoiceItem}>
      <div className={styles.first_container}>
        <p className={styles.id}>
          <span>#</span>
          {id}
        </p>
        <p className={styles.date}>Due {paymentDue}</p>
        {/* <p className={styles.name}>{clientName}</p> */}
      </div>

      <div className={styles.second_container}>
        <div className={styles.sub_container}>
          <p className={styles.name}>{clientName}</p>
          {/* <p className={styles.date}>Due {paymentDue}</p> */}
          <p className={styles.amount}>£ {total}</p>
        </div>

        <div className={styles.wrapper}>
          <div className={styles.statusBox}>
            <span></span>
            <p className={styles.status}>{status}</p>
          </div>
          <img src={rightArrow} alt="" />
        </div>
      </div>
    </li>
  );
}

export default InvoiceItem;
