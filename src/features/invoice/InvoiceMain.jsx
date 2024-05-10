import InvoiceHeading from "./InvoiceHeading";
import InvoiceList from "./InvoiceList";
import { useOutletContext } from "react-router-dom";

function InvoiceMain() {
  const [isOpen, setIsOpen] = useOutletContext();

  return (
    <>
      <InvoiceHeading setIsOpen={setIsOpen} />
      <InvoiceList />
    </>
  );
}

export default InvoiceMain;
