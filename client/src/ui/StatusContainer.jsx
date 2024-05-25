import Button from "./Button";
import StatusBox from "./StatusBox";
import styles from "./StatusContainer.module.scss";

function StatusContainer({ status }) {
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
      </div>
    </div>
  );
}

export default StatusContainer;
