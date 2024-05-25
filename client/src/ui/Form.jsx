import styles from "./Form.module.scss";

function Form({ isOpen, children, onSubmit }) {
  // console.log(onSubmit);
  return (
    <form
      onSubmit={onSubmit}
      className={`${styles.form} ${isOpen ? styles.open : ""}`}
    >
      {children}
    </form>
  );
}

export default Form;
