import styles from "./Button.module.scss";

function Button({
  children,
  type = "button",
  formonvalidate,
  name,
  handleOnClick,
  handleAddItemClick,
  handleSaveClick,
  handleCancelClick,
  onClick,
}) {
  const buttonNames = {
    new: styles.new,
    edit: styles.edit,
    delete: styles.delete,
    discard: styles.discard,
    save: styles.save,
    draft: styles.draft,
    add: styles.add,
    mark: styles.mark,
    cancel: styles.cancel,
    saveChanges: styles.saveChanges,
  };

  const clickHandlers = {
    add: handleAddItemClick,
    save: handleSaveClick,
    discard: handleCancelClick,
    default: handleOnClick || onClick,
  };

  const handleClick = clickHandlers[name] || clickHandlers.default;

  return (
    <button
      type={type}
      name={name}
      onClick={handleClick}
      className={`${styles.button} ${buttonNames[name]}`}
      formNoValidate={formonvalidate}
    >
      {children}
    </button>
  );
}

export default Button;
