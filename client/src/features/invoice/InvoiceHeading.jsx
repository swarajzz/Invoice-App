import filterIcon from "../../assets/icon-arrow-down.svg";
import styles from "../styles/InvoiceHeading.module.scss";
import Button from "../../ui/Button";
import CheckBox from "../../ui/CheckBox";
import { useEffect, useRef, useState } from "react";
import useOutsideClick from "../../hooks/useOutsideClick";
import useCheckMobileScreen from "../../hooks/useCheckMobileScreen";
import { useDispatch } from "react-redux";
import { addInvoice, setAction, toggleIsOpen } from "./formSlice";

function InvoiceHeading({ setToggleFilterValues, invoices }) {
  const [toggleFilter, setToggleFilter] = useState(false);
  const [total, setTotal] = useState(0);
  const dispatch = useDispatch();
  const isPhone = useCheckMobileScreen();

  const filterRef = useRef();

  const boxRef = useOutsideClick(handleOnClickOutside, filterRef);

  function handleOnClick() {
    dispatch(addInvoice({}));
    dispatch(toggleIsOpen());
    dispatch(setAction("new"));
  }

  function handleToggleFilter() {
    setToggleFilter((prev) => !prev);
  }

  function handleOnClickOutside() {
    setToggleFilter(false);
  }

  function toggleValue(e) {
    e.target.checked
      ? setToggleFilterValues((prev) => [...prev, e.target.name])
      : setToggleFilterValues((prev) =>
          prev.filter((item) => item !== e.target.name)
        );
  }

  useEffect(() => {
    setTotal(invoices?.length);
  }, [invoices]);

  return (
    <div className={styles.invoiceHeader}>
      <div className={styles.left_container}>
        <h2>Invoices</h2>

        {total ? (
          <p>
            {!isPhone
              ? `There are ${total} total invoices`
              : `${total} invoices`}
          </p>
        ) : (
          ""
        )}
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
        <Button name="new" className={styles.btn} handleOnClick={handleOnClick}>
          <div className={styles.plusIcon}>
            <svg width="11" height="11" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M6.313 10.023v-3.71h3.71v-2.58h-3.71V.023h-2.58v3.71H.023v2.58h3.71v3.71z"
                fill="#7C5DFA"
                fillRule="nonzero"
              />
            </svg>
          </div>
          <span>{!isPhone ? `New Invoice` : `New`}</span>
        </Button>
        <div
          className={`${styles.checkBox_container} ${
            toggleFilter ? styles.active : ""
          }`}
          ref={boxRef}
        >
          <CheckBox toggleValue={toggleValue} name="draft" label="Draft" />
          <CheckBox toggleValue={toggleValue} name="pending" label="Pending" />
          <CheckBox toggleValue={toggleValue} name="paid" label="Paid" />
        </div>
      </div>
    </div>
  );
}

export default InvoiceHeading;
