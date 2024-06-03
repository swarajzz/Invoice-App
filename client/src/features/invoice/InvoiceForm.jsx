import { useForm, useFieldArray, Controller } from "react-hook-form";

import { useRef, useState } from "react";
import { getNetTermsDate } from "../../utils/helper";

import DatePicker from "react-datepicker";

import styles from "../styles/InvoiceForm.module.scss";
import "react-datepicker/dist/react-datepicker.css";
import { toast } from "react-hot-toast";

import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import FormList from "./FormList";
import Input from "../../ui/Input";
import Button from "../../ui/Button";
import Overlay from "../../ui/Overlay";

import useOutsideClick from "../../hooks/useOutsideClick";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createInvoice } from "../../services/apiInvoices";
import { useDispatch } from "react-redux";
import { toggleIsOpen } from "./formSlice";

function InvoiceForm({ isOpen }) {
  let something = false;
  const [netTerm, setNetTerm] = useState(7);
  const [startDate, setStartDate] = useState(getNetTermsDate);
  const [toggleDropdown, setToggleDropdown] = useState(false);

  const dispatch = useDispatch();

  const queryClient = useQueryClient();

  const termRef = useRef();

  const boxRef = useOutsideClick(handleOnClickOutside, termRef);

  const { register, handleSubmit, formState, watch, setValue, control, reset } =
    useForm({
      defaultValues: {
        senderAddress: { city: "", country: "", postCode: "", street: "" },
        clientAddress: { city: "", country: "", postCode: "", street: "" },
        items: [
          {
            name: "",
            quantity: 1,
            price: 0,
            total: 0,
          },
        ],
        paymentDue: startDate,
        description: "",
        paymentTerms: 7,
        clientName: "",
        clientEmail: "",
        total: 0,
      },
    });
  const { errors } = formState;

  const { fields, append, remove } = useFieldArray({
    control,
    name: "items",
  });

  const { mutate } = useMutation({
    mutationFn: (newInvoice) => {
      return createInvoice(newInvoice);
    },
    onSuccess: () => {
      toast.success("Invoice successfully created");
      queryClient.invalidateQueries({ queryKey: ["invoices"] });
      reset();
      dispatch(toggleIsOpen());
    },
  });

  function handleOverlayClick() {
    something = true;
    dispatch(toggleIsOpen());
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
    console.log({ ...data, paymentTerms: netTerm });
    mutate({ ...data, paymentTerms: netTerm });
  }

  function onInvalid(errors) {
    console.log(errors);
  }

  return (
    <>
      <Form isOpen={isOpen} onSubmit={handleSubmit(onSubmit, onInvalid)}>
        <div className={styles.wrapper}>
          <h2>New Invoice</h2>
          <div className={styles.billFrom}>
            <h6>Bill From</h6>
            <FormRow
              label={"Street Address"}
              error={errors?.senderAddress?.street?.message}
            >
              <Input
                type="text"
                id="senderStreetAddress"
                {...register("senderAddress.street", {
                  required: "This field is required",
                })}
              />
            </FormRow>
            <div className={styles.flexInputs}>
              <FormRow
                label={"City"}
                error={errors?.senderAddress?.city?.message}
              >
                <Input
                  type="text"
                  id="senderCity"
                  {...register("senderAddress.city", {
                    required: "This field is required",
                  })}
                />
              </FormRow>
              <FormRow
                label={"Post Code"}
                error={errors?.senderAddress?.postCode?.message}
              >
                <Input
                  type="number"
                  id="senderPostCode"
                  {...register("senderAddress.postCode", {
                    required: "This field is required",
                  })}
                />
              </FormRow>
              <FormRow
                label={"Country"}
                error={errors?.senderAddress?.country?.message}
              >
                <Input
                  type="text"
                  id="senderCountry"
                  {...register("senderAddress.country", {
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
              error={errors?.clientAddress?.street?.message}
            >
              <Input
                type="text"
                id="clientStreetAddress"
                {...register("clientAddress.street", {
                  required: "This field is required",
                })}
              />
            </FormRow>

            <div className={styles.flexInputs}>
              <FormRow
                label={"City"}
                error={errors?.clientAddress?.city?.message}
              >
                <Input
                  type="text"
                  id="clientCity"
                  {...register("clientAddress.city", {
                    required: "This field is required",
                  })}
                />
              </FormRow>
              <FormRow
                label={"Post Code"}
                error={errors?.clientAddress?.postCode?.message}
              >
                <Input
                  type="number"
                  id="clientPostCode"
                  {...register("clientAddress.postCode", {
                    required: "This field is required",
                  })}
                />
              </FormRow>
              <FormRow
                label={"Country"}
                error={errors?.clientAddress?.country?.message}
              >
                <Input
                  type="text"
                  id="clientCountry"
                  {...register("clientAddress.country", {
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
              <Controller
                control={control}
                name="paymentDue"
                render={({ field: { onChange, onBlur, value, ref } }) => (
                  <DatePicker
                    wrapperClassName={styles.datePicker}
                    selected={startDate}
                    onChange={(date) => {
                      setStartDate(date);
                    }}
                    // dateFormat="d MMMM yyyy"
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
                )}
              />
            </FormRow>

            <FormRow
              label={"Payment Terms"}
              error={errors?.paymentTerms?.message}
            >
              <input
                className={styles.hoverInput}
                type="text"
                id="paymentTerms"
                list="terms"
                required
                // defaultValue="Net 7 Days"
                onClick={() => setToggleDropdown((prev) => !prev)}
                value={`Net ${netTerm} ${netTerm === 1 ? "Day" : "Days"}`}
                // handleTermDropdownClick={handleTermDropdownClick}
                // ref={termRef}
                readOnly
                {...register("paymentTerms")}
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
              error={errors?.description?.message}
            >
              <Input
                type="text"
                id="description"
                {...register("description", {
                  required: "This field is required",
                })}
              />
            </FormRow>
          </div>

          <div className={styles.itemList_container}>
            <h3>Item List</h3>
            <FormList
              fields={fields}
              register={register}
              errors={errors}
              watch={watch}
              setValue={setValue}
              remove={remove}
            />
            <Button
              type="button"
              name="add"
              onClick={() =>
                append({ name: "", quantity: 1, price: 0, total: 0 })
              }
              className={styles.addItem}
            >
              + Add New Item
            </Button>
          </div>

          <div className={styles.buttonControls}>
            <Button type="reset" onClick={() => reset()} name="discard">
              Discard
            </Button>
            <div>
              <Button type="button" name="saveDraft">
                Save as draft
              </Button>
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
