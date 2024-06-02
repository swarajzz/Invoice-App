import { useState } from "react";
import Button from "./Button";
import styles from "./ConfirmDeletion.module.scss";
import Overlay from "./Overlay";

function ConfirmDeletion({ invoiceId, handleDeleteInvoice, handleSetToggle }) {
  const [isOpen, setIsOpen] = useState(true);

  function handleCancel() {
    setIsOpen((prev) => !prev);
    handleSetToggle();
  }

  return (
    <>
      <div
        className={`${styles.wrapper} ${!isOpen ? styles.hidden : ""}
 `}
      >
        <div>
          <h6>Confirm Deletion</h6>
          <p>
            Are you sure you want to delete invoice {invoiceId} invoice? This
            action cannot be undone.{" "}
          </p>
        </div>
        <div className={styles.control_btns}>
          <Button onClick={handleCancel} type="button" name="discard">
            Cancel
          </Button>
          <Button onClick={handleDeleteInvoice} type="submit" name="delete">
            Delete
          </Button>
        </div>
      </div>
      <Overlay isOpen={isOpen} />
    </>
  );
}

export default ConfirmDeletion;
