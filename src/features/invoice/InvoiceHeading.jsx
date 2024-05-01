import filterIcon from "../../assets/icon-arrow-down.svg";
import plusIcon from "../../assets/icon-plus.svg";
import styles from "../styles/InvoiceHeading.module.scss";
import Button from "../../ui/Button";
import CheckBox from "../../ui/CheckBox";
import { useRef, useState } from "react";
import useOutsideClick from "../../hooks/useOutsideClick";

function InvoiceHeading({ setIsOpen }) {
  const [toggleFilter, setToggleFilter] = useState(false);
  const filterRef = useRef();

  const boxRef = useOutsideClick(handleOnClickOutside, filterRef);

  function handleOnClick() {
    setIsOpen((prev) => !prev);
  }

  function handleToggleFilter() {
    setToggleFilter((prev) => !prev);
  }

  function handleOnClickOutside() {
    setToggleFilter(false);
  }

  return (
    <section className={styles.invoiceHeader}>
      <div className={styles.left_container}>
        <h2>Invoices</h2>
        <p>There are X total invoices</p>
      </div>

      <div className={styles.right_container}>
        <div
          className={styles.filter}
          onClick={handleToggleFilter}
          ref={filterRef}
        >
          Filter by status
          <img
            className={toggleFilter ? styles.scaleImg : ""}
            src={filterIcon}
            alt="filter icon"
          />
        </div>
        <Button
          type="save"
          className={styles.btn}
          handleOnClick={handleOnClick}
        >
          <div className={styles.plusIcon}>
            <img src={plusIcon} alt="filter icon" />
          </div>
          <p>New Invoice</p>
        </Button>
        <div
          className={`${styles.checkBox_container} ${
            toggleFilter ? styles.active : ""
          }`}
          ref={boxRef}
        >
          <CheckBox name="draft" label="Draft" />
          <CheckBox name="pending" label="Pending" />
          <CheckBox name="paid" label="Paid" />
        </div>
      </div>
    </section>
  );
}

export default InvoiceHeading;
