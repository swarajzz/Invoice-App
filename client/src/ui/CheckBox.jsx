import styles from "./CheckBox.module.scss";

function CheckBox({ name, label, toggleValue }) {
  return (
    <div className={styles.checkBoxRow}>
      <input
        onChange={(e) => toggleValue(e)}
        type="checkbox"
        id={name}
        name={name}
      />
      <label htmlFor={name}>{label}</label>
    </div>
  );
}

export default CheckBox;
