import { useMutation, useQueryClient } from "@tanstack/react-query";
import Button from "./Button";
import StatusBox from "./StatusBox";
import styles from "./StatusContainer.module.scss";
import { deleteInvoice, markAsPaidInvoice } from "../services/apiInvoices";
import ConfirmDeletion from "./ConfirmDeletion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

function StatusContainer({ invoiceId, status }) {
  const [isDeleteToggle, setIsDeleteToggle] = useState(false);
  const navigate = useNavigate();

  const queryClient = useQueryClient();

  const { mutate: markAsPaid } = useMutation({
    mutationFn: (invoiceId) => {
      return markAsPaidInvoice(invoiceId);
    },
    onSuccess: () => {
      toast.success("Invoice successfully edited");
      queryClient.invalidateQueries({
        queryKey: ["invoices"],
      });
    },
  });

  const { mutate: deleteInv } = useMutation({
    mutationFn: (invoiceId) => {
      return deleteInvoice(invoiceId);
    },
    onSuccess: () => {
      toast.success("Invoice successfully deleted");
      queryClient.invalidateQueries({
        queryKey: ["invoices"],
      });
    },
  });

  function handleMarkPaidReq() {
    markAsPaid(invoiceId);
  }

  function handleDeleteInvoice() {
    deleteInv(invoiceId);
    setIsDeleteToggle((prev) => !prev);
    navigate("/");
  }

  function handleSetToggle() {
    setIsDeleteToggle((prev) => !prev);
  }

  return (
    <div className={styles.status_container}>
      <div className={styles.status_bar}>
        <p>Status</p>
        <div className={styles.wrapper}>
          <StatusBox type={status} />
        </div>
      </div>

      {isDeleteToggle && (
        <ConfirmDeletion
          handleDeleteInvoice={handleDeleteInvoice}
          handleSetToggle={handleSetToggle}
          invoiceId={invoiceId}
        />
      )}

      <div className={styles.control_btns}>
        <Button name="edit">Edit</Button>
        <Button onClick={handleSetToggle} name="delete">
          Delete
        </Button>
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
