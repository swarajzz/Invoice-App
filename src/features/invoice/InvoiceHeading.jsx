import filterIcon from "../../assets/icon-arrow-down.svg";
import plusIcon from "../../assets/icon-plus.svg";
import styles from "../styles/InvoiceHeading.module.scss";
import Button from "../../ui/Button";

function InvoiceHeading({ setIsOpen }) {
  function handleOnClick() {
    setIsOpen((prev) => !prev);
  }

  return (
    <section className={styles.invoiceHeader}>
      <div className={styles.left_container}>
        <h2>Invoices</h2>
        <p>There are X total invoices</p>
      </div>

      <div className={styles.right_container}>
        <div className={styles.filter}>
          Filter by status
          <img src={filterIcon} alt="filter icon" />
        </div>
        <Button type='save' className={styles.btn} onClick={handleOnClick}>
          <div className={styles.plusIcon}>
            <img src={plusIcon} alt="filter icon" />
          </div>
          <p>New Invoice</p>
        </Button>
      </div>
    </section>
  );
}

export default InvoiceHeading;
