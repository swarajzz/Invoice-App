import filterIcon from "../../assets/icon-arrow-down.svg";
import plusIcon from "../../assets/icon-plus.svg";
import styles from "../styles/InvoiceHeading.module.scss";
import Button from "../../ui/Button";
import CheckBox from "../../ui/CheckBox";
import { useRef, useState } from "react";
import useOutsideClick from "../../hooks/useOutsideClick";
import useCheckMobileScreen from "../../hooks/useCheckMobileScreen";

function InvoiceHeading({ setIsOpen }) {
  const [toggleFilter, setToggleFilter] = useState(false);

  const isPhone = useCheckMobileScreen();

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
    <div className={styles.invoiceHeader}>
      <div className={styles.left_container}>
        <h2>Invoices</h2>

        <p>{!isPhone ? `There are 10 total invoices` : `10 invoices`}</p>
      </div>

      <div className={styles.right_container}>
        <div
          className={styles.filter}
          onClick={handleToggleFilter}
          ref={filterRef}
        >
          <p>{!isPhone ? `Filter by status` : `Filter`}</p>
          <img
            className={toggleFilter ? styles.scaleImg : ""}
            src={filterIcon}
            alt="filter icon"
          />
        </div>
        <Button type="new" className={styles.btn} handleOnClick={handleOnClick}>
          <div className={styles.plusIcon}>
            <img src={plusIcon} alt="filter icon" />
          </div>
          <p>{!isPhone ? `New Invoice` : `New`}</p>
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
    </div>
  );
}

export default InvoiceHeading;
