import FormRow from "../../ui/FormRow";
import styles from "../styles/FormListItem.module.scss";
import deleteIcon from "../../assets/icon-delete.svg";
import { useEffect, useState } from "react";

function FormListItem() {
  const [quantity, setQuantity] = useState(1);
  const [price, setPrice] = useState(0);
  const [total, setTotal] = useState(0.0);

  useEffect(() => {
    let value = quantity * price;
    value = parseFloat(value).toFixed(2);
    setTotal(value);
  }, [quantity, price]);

  return (
    <li className={styles.listItem}>
      <div className={styles.firstBox}>
        <FormRow label={"Item Name"}>
          <input type="text" id="itemName" required />
        </FormRow>
      </div>
      <FormRow label={"Qty."}>
        <input
          onChange={(e) => setQuantity(e.target.value)}
          defaultValue={1}
          type="number"
          min={0}
          id="quantity"
          required
        />
      </FormRow>
      <FormRow label={"Price"}>
        <input
          onChange={(e) => setPrice(e.target.value)}
          type="number"
          id="price"
          defaultValue={0}
          min={0}
          required
        />
      </FormRow>
      <FormRow label={"Total"}>
        <input
          className={styles.total}
          type="number"
          id="total"
          value={total}
          disabled
        />
      </FormRow>
      <button className={styles.iconBox}>
        <img className={styles.deleteIcon} src={deleteIcon} alt="Delete Icon" />
      </button>
    </li>
  );
}

export default FormListItem;
