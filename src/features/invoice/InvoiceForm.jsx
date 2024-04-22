import FormRow from "../../ui/FormRow";

import styles from "../styles/InvoiceForm.module.scss";

function InvoiceForm() {
  return (
    <div className={styles.form}>
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
  );
}

export default InvoiceForm;

// <form {...formProps}>
//   <div className={styles.padding}>
//     <Heading variant="h1">
//       {editing && invoice ? (
//         <>
//           Edit <span>#</span>
//           {invoice.id}
//         </>
//       ) : (
//         "New Invoice"
//       )}
//     </Heading>
//     <p className={styles.colorLabel}>Bill From</p>
//     <Input {...fromStreetInputProps} />
//     <div className={styles.inputGrid}>
//       <Input {...fromCityInputProps} />
//       <Input {...fromPostCodeInputProps} />
//       <Input {...fromCountryInputProps} />
//     </div>
//     <p className={styles.colorLabel}>Bill To</p>
//     <Input {...clientNameInputProps} />
//     <Input {...clientEmailInputProps} />
//     <Input {...clientAddressInputProps} />
//     <div className={styles.inputGrid}>
//       <Input {...clientCityInputProps} />
//       <Input {...clientPostCodeInputProps} />
//       <Input {...clientCountryInputProps} />
//     </div>

//     <div className={styles.dateAndTerms}>
//       <DatePicker {...datePickerProps} />
//       <SelectDropdown {...paymentTermsProps} />
//     </div>
//     <Input {...projectDescriptionInputProps} />
//     <FormItemList items={items} setItems={setItems} />
//   </div>

//   <div className={bottomClass}>
//     {editing && (
//       <>
//         {/* empty div for flexbox  */}
//         <div></div>
//         <div>
//           <Button variant={2} type="button" onClick={handleCancel}>
//             Cancel
//           </Button>
//           <Button variant={1} type="submit">
//             Save Changes
//           </Button>
//         </div>
//       </>
//     )}
//     {!editing && (
//       <>
//         <div>
//           <Button variant={2} type="button" onClick={handleCancel}>
//             Discard
//           </Button>
//         </div>
//         <div>
//           <Button variant={3} type="button" onClick={handleSaveAsDraft}>
//             Save as Draft
//           </Button>
//           <Button variant={1} type="submit">
//             Save & Send
//           </Button>
//         </div>
//       </>
//     )}
//   </div>
// </form>
