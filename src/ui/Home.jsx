import { useState } from "react";
import InvoiceForm from "../features/invoice/InvoiceForm";
import InvoiceHeading from "../features/invoice/InvoiceHeading";
import InvoiceList from "../features/invoice/InvoiceList";

function Home() {
  const [isOpen, setIsOpen] = useState(false);
  // console.log(isOpen);

  return (
    <>
      <InvoiceForm isOpen={isOpen} setIsOpen={setIsOpen} />
      <InvoiceHeading setIsOpen={setIsOpen} />
      <InvoiceList />
    </>
  );
}

export default Home;
