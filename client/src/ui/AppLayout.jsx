import Header from "./Header";
import { Outlet } from "react-router-dom";

import styles from "./AppLayout.module.scss";
import InvoiceForm from "../features/invoice/InvoiceForm";
import { useSelector } from "react-redux";

function AppLayout() {
  const isOpen = useSelector((store) => store.form.isOpen);
  console.log(isOpen);
  return (
    <>
      <Header />
      <InvoiceForm isOpen={isOpen} />

      <main className={styles.main}>
        <section>
          <Outlet context={[isOpen]} />
        </section>
      </main>
    </>
  );
}

export default AppLayout;
