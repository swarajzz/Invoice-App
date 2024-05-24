import styles from "./Form.module.scss";

function Form({ isOpen, children }) {
  return (
    <form className={`${styles.form} ${isOpen ? styles.open : ""}`}>
      {children}
    </form>
  );
}

export default Form;
