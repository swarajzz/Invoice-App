import styles from "./Button.module.scss";

function Button({ children, type }) {
  let buttonClass = styles.button; // Default class
  if (type === "edit") {
    buttonClass += " " + styles.edit; // Use blue style
  } else if (type === "delete") {
    buttonClass += " " + styles.delete; // Use red style
  }

  console.log(buttonClass)

  return <button className={buttonClass}>{children}</button>;
}

export default Button;
