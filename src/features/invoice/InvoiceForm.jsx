import { useEffect, useReducer, useRef, useState } from "react";
import FormRow from "../../ui/FormRow";

import styles from "../styles/InvoiceForm.module.scss";
import FormList from "./FormList";
import Button from "../../ui/Button";

function InvoiceForm({ isOpen, setIsOpen }) {
  let something = false;

  function handleOverlayClick(e) {
    something = true;
    setIsOpen(false);
  }

  return (
    <>
      <div
        className={
          `${styles.form_container} ${isOpen ? styles.open : ""}`
          // toggleRef.current
        }
      >
        <h2>New Invoice</h2>
        <form>
          <div>
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
              <input type="text" id="invoiceDate" />
            </FormRow>
            <FormRow label={"Payment Terms"}>
              <input type="text" id="invoiceTerm" />
            </FormRow>
            <FormRow label={"Project Description"}>
              <input type="text" id="desc" />
            </FormRow>

            <div className="itemList_container">
              <h3>Item List</h3>
              <FormList />
            </div>

            <div className={styles.buttonControls}>
              <Button type="discard">Discard</Button>
              <Button type="saveDraft">Save as draft</Button>
              <Button type="save">Save & Send</Button>
            </div>
          </div>
          <div></div>
        </form>
      </div>
      <div
        className={`${styles.overlay} ${isOpen ? styles.in : ""} ${
          something ? styles.out : ""
        }`}
        onClick={handleOverlayClick}
      ></div>
    </>
  );
}

export default InvoiceForm;
