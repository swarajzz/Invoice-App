import Header from "./Header";
import { Outlet } from "react-router-dom";

import styles from "./AppLayout.module.scss";

function AppLayout() {
  return (
    // <div className={styles.flex}>
    <>
      <Header />

      <main className={styles.main}>
        <Outlet />
        {/* <div className={styles.overlay}></div> */}
      </main>
    </>
    // </div>
  );
}

export default AppLayout;
