import Header from "./Header";
import { Outlet } from "react-router-dom";

import styles from "./AppLayout.module.scss";

function AppLayout() {
  return (
    <div className={styles.grid}>
      <Header />

      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;
