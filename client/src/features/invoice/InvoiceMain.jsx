import { useState } from "react";
import InvoiceHeading from "./InvoiceHeading";
import InvoiceList from "./InvoiceList";

function InvoiceMain() {
  const [toggleFilterValues, setToggleFilterValues] = useState([]);
  
  return (
    <>
      <InvoiceHeading
        setToggleFilterValues={setToggleFilterValues}
      />
      <InvoiceList
        toggleFilterValues={toggleFilterValues}
      />
    </>
  );
}

export default InvoiceMain;
