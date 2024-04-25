import { useEffect, useReducer, useRef, useState } from "react";
import FormRow from "../../ui/FormRow";

import styles from "../styles/InvoiceForm.module.scss";

function InvoiceForm({ isOpen }) {
  // const ref = useRef();

  // useEffect(() => {
  //   if (isOpen) {
  //     ref.current.showModal();
  //   } else {
  //     ref.current.close();
  //   }
  // }, [isOpen]);
  return (
    <>
      <div className={`${styles.form_container} ${isOpen ? styles.open : ""}`}>
        <h2>New Invoice</h2>
        <form>
          <h6>Bill From</h6>
          <FormRow label={"Street Address"}>
            <input type="text" id="senderStreetAddress" />
          </FormRow>
          <div className={styles.flexInputs}>
            <FormRow label={"City"}>
              <input type="text" id="senderCity" />
            </FormRow>
            <FormRow label={"Country"}>
              <input type="text" id="senderCountry" />
            </FormRow>
            <FormRow label={"Post Code"}>
              <input type="text" id="senderPostCode" />
            </FormRow>
          </div>

          <h6>Bill To</h6>
          <FormRow label={"Client's Name"}>
            <input type="text" id="clientName" />
          </FormRow>
          <FormRow label={"Client's Email"}>
            <input type="text" id="clientEmail" />
          </FormRow>
          <FormRow label={"Street Address"}>
            <input type="text" id="clientStreetAdress" />
          </FormRow>

          <div className={styles.flexInputs}>
            <FormRow label={"City"}>
              <input type="text" id="clientCity" />
            </FormRow>
            <FormRow label={"Post Code"}>
              <input type="text" id="clientPostCode" />
            </FormRow>
            <FormRow label={"Country"}>
              <input type="text" id="clientCountry" />
            </FormRow>
          </div>

          <FormRow label={"Invoice Date"}>
            <input type="text" id="name" />
          </FormRow>
          <FormRow label={"Payment Terms"}>
            <input type="text" id="name" />
          </FormRow>
          <FormRow label={"Project Description"}>
            <input type="text" id="name" />
          </FormRow>
        </form>
      </div>
      <div className={styles.overlay}></div>
    </>
  );
}

export default InvoiceForm;
