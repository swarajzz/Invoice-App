import { useState } from "react";
import InvoiceHeading from "./InvoiceHeading";
import InvoiceList from "./InvoiceList";
import { useOutletContext } from "react-router-dom";

function InvoiceMain() {
  const [isOpen, setIsOpen] = useOutletContext();
  const [toggleFilterValues, setToggleFilterValues] = useState([]);

  return (
    <>
      <InvoiceHeading
        setToggleFilterValues={setToggleFilterValues}
        setIsOpen={setIsOpen}
      />
      <InvoiceList toggleFilterValues={toggleFilterValues} />
    </>
  );
}

export default InvoiceMain;
