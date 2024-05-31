import styles from "./Button.module.scss";

function Button({
  children,
  type = "button",
  name,
  handleOnClick,
  handleAddItemClick,
  handleSaveClick,
  onClick
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
    default: handleOnClick || onClick,
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
