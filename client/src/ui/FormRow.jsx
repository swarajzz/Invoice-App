import styles from "./FormRow.module.scss";

function FormRow({ label, error, children }) {
  return (
    <div className={styles.formRow}>
      {label && <label>{label}</label>}
      {children}
      {/* {error && <Error>{error}</Error>} */}
    </div>
  );
}

export default FormRow;
