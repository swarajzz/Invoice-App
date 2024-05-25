import { useForm } from "react-hook-form";

import { useRef, useState } from "react";
import { getNetTermsDate } from "../../utils/helper";

import DatePicker from "react-datepicker";

import styles from "../styles/InvoiceForm.module.scss";
import "react-datepicker/dist/react-datepicker.css";

import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import FormList from "./FormList";
import Input from "../../ui/Input";
import Button from "../../ui/Button";
import Overlay from "../../ui/Overlay";

import useOutsideClick from "../../hooks/useOutsideClick";

function InvoiceForm({ isOpen, setIsOpen }) {
  let something = false;
  const [counter, setCounter] = useState(1);
  const [netTerm, setNetTerm] = useState(1);
  const [startDate, setStartDate] = useState(getNetTermsDate);
  const [toggleDropdown, setToggleDropdown] = useState(false);

  const termRef = useRef();

  const boxRef = useOutsideClick(handleOnClickOutside, termRef);

  const { register, handleSubmit, formState } = useForm();
  const { errors } = formState;
  console.log(errors);
  function handleOverlayClick(e) {
    something = true;
    setIsOpen(false);
  }

  function handleAddItemClick(e) {
    e.preventDefault();
    setCounter((prev) => prev + 1);
  }

  function handleSaveClick(e) {
    e.preventDefault();
  }

  function handleOnClickOutside() {
    setToggleDropdown(false);
  }

  function handleOptionChange(value) {
    setNetTerm(value);
    setToggleDropdown(false);
    setStartDate(getNetTermsDate(value));
  }

  // function handleTermDropdownClick(e) {
  //   setToggleDropdown((prev) => !prev);
  // }

  function onSubmit(data) {
    console.log(data);
  }

  // function onInvalid(errors) {
  //   console.log(errors);
  // }

  return (
    <>
      <Form isOpen={isOpen} onSubmit={handleSubmit(onSubmit)}>
        <h2>New Invoice</h2>
        <div className={styles.wrapper}>
          <div className={styles.billFrom}>
            <h6>Bill From</h6>
            <FormRow
              label={"Street Address"}
              error={errors?.senderStreetAddress?.message}
            >
              <Input
                type="text"
                id="senderStreetAddress"
                {...register("senderStreetAddress", {
                  required: "This field is required",
                })}
              />
            </FormRow>
            <div className={styles.flexInputs}>
              <FormRow label={"City"} error={errors?.senderCity?.message}>
                <Input
                  type="text"
                  id="senderCity"
                  {...register("senderCity", {
                    required: "This field is required",
                  })}
                />
              </FormRow>
              <FormRow
                label={"Post Code"}
                error={errors?.senderPostCode?.message}
              >
                <Input
                  type="number"
                  id="senderPostCode"
                  {...register("senderPostCode", {
                    required: "This field is required",
                  })}
                />
              </FormRow>
              <FormRow label={"Country"} error={errors?.senderCountry?.message}>
                <Input
                  type="text"
                  id="senderCountry"
                  {...register("senderCountry", {
                    required: "This field is required",
                  })}
                />
              </FormRow>
            </div>
          </div>

          <div className={styles.billTo}>
            <h6>Bill To</h6>
            <FormRow
              label={"Client's Name"}
              error={errors?.clientName?.message}
            >
              <Input
                type="text"
                id="clientName"
                {...register("clientName", {
                  required: "This field is required",
                })}
              />
            </FormRow>
            <FormRow
              label={"Client's Email"}
              error={errors?.clientEmail?.message}
            >
              <Input
                type="email"
                id="clientEmail"
                {...register("clientEmail", {
                  required: "This field is required",
                })}
              />
            </FormRow>
            <FormRow
              label={"Street Address"}
              error={errors?.clientStreetAddress?.message}
            >
              <Input
                type="text"
                id="clientStreetAddress"
                {...register("clientStreetAddress", {
                  required: "This field is required",
                })}
              />
            </FormRow>

            <div className={styles.flexInputs}>
              <FormRow label={"City"} error={errors?.clientCity?.message}>
                <Input
                  type="text"
                  id="clientCity"
                  {...register("clientCity", {
                    required: "This field is required",
                  })}
                />
              </FormRow>
              <FormRow
                label={"Post Code"}
                error={errors?.clientPostCode?.message}
              >
                <Input
                  type="number"
                  id="clientPostCode"
                  {...register("clientPostCode", {
                    required: "This field is required",
                  })}
                />
              </FormRow>
              <FormRow label={"Country"} error={errors?.clientCountry?.message}>
                <Input
                  type="text"
                  id="clientCountry"
                  {...register("clientCountry", {
                    required: "This field is required",
                  })}
                />
              </FormRow>
            </div>
          </div>

          <div className={styles.invoiceDetail}>
            <FormRow
              label={"Invoice Date"}
              //  error={errors?.name?.message}
            >
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

            <FormRow
              label={"Payment Terms"}
              error={errors?.invoiceTerm?.message}
            >
              <input
                className={styles.hoverInput}
                type="text"
                id="invoiceTerm"
                list="terms"
                required
                // defaultValue="Net 7 Days"
                onClick={() => setToggleDropdown((prev) => !prev)}
                value={`Net ${netTerm} ${netTerm === 1 ? "Day" : "Days"}`}
                // handleTermDropdownClick={handleTermDropdownClick}
                // ref={termRef}
                readOnly
                {...register("invoiceTerm")}
              />
              {toggleDropdown && (
                <div
                  className={styles.selectDropdown}
                  // ref={boxRef}
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
            <FormRow
              label={"Project Description"}
              error={errors?.desc?.message}
            >
              <Input
                type="text"
                id="desc"
                {...register("desc", { required: "This field is required" })}
              />
            </FormRow>
          </div>

          <div className={styles.itemList_container}>
            <h3>Item List</h3>
            <FormList counter={counter} register={register} errors={errors} />
            <Button
              name="add"
              handleAddItemClick={handleAddItemClick}
              className={styles.addItem}
            >
              + Add New Item
            </Button>
          </div>

          <div className={styles.buttonControls}>
            <Button type="reset" name="discard">
              Discard
            </Button>
            <div>
              <Button name="saveDraft">Save as draft</Button>
              <Button type="submit" name="save">
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
