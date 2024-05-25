import FormRow from "../../ui/FormRow";
import styles from "../styles/FormListItem.module.scss";
import deleteIcon from "../../assets/icon-delete.svg";
import { useEffect, useState } from "react";
import Input from "../../ui/Input";

function FormListItem({ register }) {
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
          <Input
            type="text"
            id="itemName"
            {...register("itemName", {
              required: true,
            })}
          />
        </FormRow>
      </div>
      <FormRow label={"Qty."}>
        <Input
          onChange={(e) => setQuantity(e.target.value)}
          defaultValue={1}
          type="number"
          id="quantity"
          {...register("quantity", {
            required: true,
            min: 0,
          })}
        />
      </FormRow>
      <FormRow label={"Price"}>
        <Input
          onChange={(e) => setPrice(e.target.value)}
          type="number"
          id="price"
          defaultValue={0}
          {...register("price", {
            required: true,
            min: 0,
          })}
        />
      </FormRow>
      <FormRow label={"Total"}>
        <Input
          className={styles.total}
          type="number"
          id="total"
          value={total}
          disabled
          {...register("total", {
            required: true,
          })}
        />
      </FormRow>
      <button className={styles.iconBox}>
        <img className={styles.deleteIcon} src={deleteIcon} alt="Delete Icon" />
      </button>
    </li>
  );
}

export default FormListItem;
