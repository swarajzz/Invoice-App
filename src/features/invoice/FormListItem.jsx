import FormRow from "../../ui/FormRow";
import styles from "../styles/FormListItem.module.scss";
import deleteIcon from "../../assets/icon-delete.svg";

function FormListItem() {
  return (
    <li className={styles.listItem}>
      <div className={styles.firstBox}>
        <FormRow label={"Item Name"}>
          <input type="text" id="itemName" />
        </FormRow>
      </div>
      <FormRow label={"Qty."}>
        <input type="text" id="quantity" />
      </FormRow>
      <FormRow label={"Price"}>
        <input type="text" id="price" />
      </FormRow>
      <FormRow label={"Total"}>
        <input className={styles.total} type="text" id="total" defaultValue={100} disabled/>
      </FormRow>
      <button className={styles.iconBox}>
        <img className={styles.deleteIcon} src={deleteIcon} alt="Delete Icon" />
      </button>
    </li>
  );
}

export default FormListItem;
