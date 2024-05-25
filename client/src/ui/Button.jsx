import styles from "./Button.module.scss";

function Button({
  children,
  type,
  name,
  handleOnClick,
  handleAddItemClick,
  handleSaveClick,
}) {
  const buttonNames = {
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

  const handleClick = clickHandlers[name] || clickHandlers.default;

  return (
    <button
      type={type}
      name={name}
      onClick={handleClick}
      className={`${styles.button} ${buttonNames[name]}`}
    >
      {children}
    </button>
  );
}

export default Button;
