import { useState } from "react";
import InvoiceHeading from "./InvoiceHeading";
import InvoiceList from "./InvoiceList";
import { useOutletContext } from "react-router-dom";

function InvoiceMain() {
  const [isOpen, setIsOpen] = useOutletContext();
  const [toggleFilterValues, setToggleFilterValues] = useState([]);

  function handleToggleIsOpen() {
    setIsOpen((prev) => !prev);
  }

  return (
    <>
      <InvoiceHeading
        handleOnClick={handleToggleIsOpen}
        setToggleFilterValues={setToggleFilterValues}
        setIsOpen={setIsOpen}
      />
      <InvoiceList
        handleOnClick={handleToggleIsOpen}
        toggleFilterValues={toggleFilterValues}
      />
    </>
  );
}

export default InvoiceMain;
