import styles from "./CheckBox.module.scss";

function CheckBox({ name, label }) {
  return (
    <div className={styles.checkBoxRow}>
      <input type="checkbox" id={name} name={name} />
      <label htmlFor={name}>{label}</label>
    </div>
  );
}

export default CheckBox;
