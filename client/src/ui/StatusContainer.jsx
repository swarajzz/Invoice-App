import { useMutation } from "@tanstack/react-query";
import Button from "./Button";
import StatusBox from "./StatusBox";
import styles from "./StatusContainer.module.scss";
import { markAsPaidInvoice } from "../services/apiInvoices";

function StatusContainer({ invoiceId, status }) {
  const mutation = useMutation({
    mutationFn: (invoiceId) => {
      return markAsPaidInvoice(invoiceId);
    },
  });

  function handleMarkPaidReq() {
    mutation.mutate(invoiceId);
  }

  return (
    <div className={styles.status_container}>
      <div className={styles.status_bar}>
        <p>Status</p>
        <div className={styles.wrapper}>
          <StatusBox type={status} />
        </div>
      </div>

      <div className={styles.control_btns}>
        <Button name="edit">Edit</Button>
        <Button name="delete">Delete</Button>
        {status === "pending" && (
          <Button onClick={handleMarkPaidReq} type="button" name="mark">
            Mark as Paid{" "}
          </Button>
        )}
      </div>
    </div>
  );
}

export default StatusContainer;
