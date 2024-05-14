import styles from "./StatusBox.module.scss";

function StatusBox({ type }) {
  const statusTypes = {
    paid: styles.paid,
    pending: styles.pending,
    draft: styles.draft,
  };

  return (
    <div className={`${styles.statusBox} ${statusTypes[type]}`}>
      <span className={styles.spanBackround}></span>
      <p className={styles.status}>{type}</p>
    </div>
  );
}

export default StatusBox;
