import FormRow from "../../ui/FormRow";

import styles from "../styles/InvoiceForm.module.scss";
import FormList from "./FormList";
import Button from "../../ui/Button";
import { useRef, useState } from "react";
import { getNetTermsDate } from "../../utils/helper";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import useOutsideClick from "../../hooks/useOutsideClick";
import Form from "../../ui/Form";
import Input from "../../ui/Input";
import Overlay from "../../ui/Overlay";

function InvoiceForm({ isOpen, setIsOpen }) {
  let something = false;
  const [counter, setCounter] = useState(1);
  const [netTerm, setNetTerm] = useState(1);
  const [startDate, setStartDate] = useState(getNetTermsDate);
  const [toggleDropdown, setToggleDropdown] = useState(false);

  const termRef = useRef();

  const boxRef = useOutsideClick(handleOnClickOutside, termRef);

  function handleOverlayClick(e) {
    something = true;
    setIsOpen(false);
  }

  function handleAddItemClick(e) {
    e.preventDefault();
    console.log(e);
    setCounter((prev) => prev + 1);
  }

  function handleSaveClick(e) {
    e.preventDefault();
  }

  function handleOnClickOutside() {
    setToggleDropdown(false);
  }

  function handleChange(e) {
    console.log(e.target.value);
  }

  function handleOptionChange(value) {
    setNetTerm(value);
    setToggleDropdown(false);
    setStartDate(getNetTermsDate(value));
  }

  return (
    <>
      <Form isOpen={isOpen}>
        <h2>New Invoice</h2>
        <div className={styles.wrapper}>
          <div className={styles.billFrom}>
            <h6>Bill From</h6>
            <FormRow label={"Street Address"}>
              <Input type="text" id="senderStreetAddress" required />
            </FormRow>
            <div className={styles.flexInputs}>
              <FormRow label={"City"}>
                <Input type="text" id="senderCity" required />
              </FormRow>
              <FormRow label={"Post Code"}>
                <Input type="number" id="senderPostCode" required />
              </FormRow>
              <FormRow label={"Country"}>
                <Input type="text" id="senderCountry" required />
              </FormRow>
            </div>
          </div>

          <div className={styles.billTo}>
            <h6>Bill To</h6>
            <FormRow label={"Client's Name"}>
              <Input type="text" id="clientName" required />
            </FormRow>
            <FormRow label={"Client's Email"}>
              <Input type="email" id="clientEmail" required />
            </FormRow>
            <FormRow label={"Street Address"}>
              <Input type="text" id="clientStreetAdress" required />
            </FormRow>

            <div className={styles.flexInputs}>
              <FormRow label={"City"}>
                <Input type="text" id="clientCity" required />
              </FormRow>
              <FormRow label={"Post Code"}>
                <Input type="number" id="clientPostCode" required />
              </FormRow>
              <FormRow label={"Country"}>
                <Input type="text" id="clientCountry" required />
              </FormRow>
            </div>
          </div>

          <div className={styles.invoiceDetail}>
            <FormRow label={"Invoice Date"}>
              {/* <input type="date" id="invoiceDate" value={formatDate(startDate)} /> */}
              <DatePicker
                wrapperClassName={styles.datePicker}
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                dateFormat="d MMMM yyyy"
                showIcon
                toggleCalendarOnIconClick
                icon={
                  <svg
                    width="16"
                    height="16"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14 2h-.667V.667A.667.667 0 0012.667 0H12a.667.667 0 00-.667.667V2H4.667V.667A.667.667 0 004 0h-.667a.667.667 0 00-.666.667V2H2C.897 2 0 2.897 0 4v10c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zm.667 12c0 .367-.3.667-.667.667H2A.668.668 0 011.333 14V6.693h13.334V14z"
                      fill="#7E88C3"
                      opacity=".5"
                    />
                  </svg>
                }
                calendarClassName={styles.calendarContainer}
              />
            </FormRow>
            <FormRow label={"Payment Terms"}>
              <Input
                className={styles.hoverInput}
                type="text"
                id="invoiceTerm"
                list="terms"
                required
                defaultValue="Net 7 Days"
                onClick={() => setToggleDropdown((prev) => !prev)}
                ref={termRef}
                readOnly
              />
              {toggleDropdown && (
                <div
                  className={styles.selectDropdown}
                  ref={boxRef}
                  onChange={(e) => handleChange(e)}
                >
                  <div
                    className={styles.selectDropdown_option}
                    onClick={() => handleOptionChange(1)}
                  >
                    Net 1 Day
                  </div>
                  <div
                    className={styles.selectDropdown_option}
                    onClick={() => handleOptionChange(7)}
                  >
                    Net 7 Days
                  </div>
                  <div
                    className={styles.selectDropdown_option}
                    onClick={() => handleOptionChange(14)}
                  >
                    Net 14 Days
                  </div>
                  <div
                    className={styles.selectDropdown_option}
                    onClick={() => handleOptionChange(30)}
                  >
                    Net 30 Days
                  </div>
                </div>
              )}
            </FormRow>
            <FormRow label={"Project Description"}>
              <Input type="text" id="desc" required />
            </FormRow>
          </div>

          <div className={styles.itemList_container}>
            <h3>Item List</h3>
            <FormList counter={counter} />
            <Button
              handleAddItemClick={handleAddItemClick}
              type="add"
              className={styles.addItem}
            >
              + Add New Item
            </Button>
          </div>

          <div className={styles.buttonControls}>
            <Button type="discard">Discard</Button>
            <div>
              <Button type="saveDraft">Save as draft</Button>
              <Button handleSaveClick={handleSaveClick} type="save">
                Save & Send
              </Button>
            </div>
          </div>
        </div>
      </Form>
      <Overlay handleOverlayClick={handleOverlayClick} isOpen={isOpen} />
    </>
  );
}

export default InvoiceForm;
