import styles from "./FormRow.module.scss";

function FormRow({ label, error, children }) {
  return (
    <div className={styles.formRow}>
      {label && <label htmlFor={children?.props?.id}>{label}</label>}
      {children}
      {error && <span>{error}</span>}
    </div>
  );
}

export default FormRow;
