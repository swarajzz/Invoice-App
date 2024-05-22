import styles from "./Button.module.scss";

function Button({
  children,
  type,
  handleOnClick,
  handleAddItemClick,
  handleSaveClick,
}) {
  const buttonTypes = {
    new: styles.new,
    edit: styles.edit,
    delete: styles.delete,
    discard: styles.discard,
    save: styles.save,
    saveDraft: styles.saveDraft,
    add: styles.add,
  };

  const clickHandlers = {
    add: handleAddItemClick,
    save: handleSaveClick,
    default: handleOnClick,
  };

  const handleClick = clickHandlers[type] || clickHandlers.default;

  return (
    <button
      onClick={handleClick}
      className={`${styles.button} ${buttonTypes[type]}`}
    >
      {children}
    </button>
  );
}

export default Button;
