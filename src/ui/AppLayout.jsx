import Header from "./Header";
import { Outlet } from "react-router-dom";

import styles from "./AppLayout.module.scss";
import InvoiceForm from "../features/invoice/InvoiceForm";
import { useState } from "react";

function AppLayout() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Header />
      <InvoiceForm isOpen={isOpen} setIsOpen={setIsOpen} />

      <main className={styles.main}>
        <section>
          <Outlet context={[isOpen, setIsOpen]} />
        </section>
      </main>
    </>
  );
}

export default AppLayout;
