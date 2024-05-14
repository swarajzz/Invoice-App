import styles from "./Button.module.scss";

function Button({ children, type, handleOnClick }) {
  const buttonTypes = {
    new: styles.new,
    edit: styles.edit,
    delete: styles.delete,
    discard: styles.discard,
    save: styles.save,
    saveDraft: styles.saveDraft,
    add: styles.add,
  };

  return (
    <button
      onClick={handleOnClick}
      className={`${styles.button} ${buttonTypes[type]}`}
    >
      {children}
    </button>
  );
}

export default Button;
