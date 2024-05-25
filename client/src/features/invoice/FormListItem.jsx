import FormRow from "../../ui/FormRow";
import styles from "../styles/FormListItem.module.scss";
import deleteIcon from "../../assets/icon-delete.svg";
import { useEffect, useState } from "react";
import Input from "../../ui/Input";

function FormListItem({ register, errors }) {
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
      <FormRow label={"Item Name"} error={errors?.itemName?.message}>
        <Input
          type="text"
          id="itemName"
          placeholder="abc"
          {...register("itemName", {
            required: "This field is required",
          })}
        />
      </FormRow>
      {/* </div> */}
      <FormRow label={"Qty."} error={errors?.quantity?.message}>
        <Input
          onChange={(e) => setQuantity(e.target.value)}
          defaultValue={1}
          min={1}
          type="number"
          id="quantity"
          {...register("quantity", {
            required: "This field is required",
            min: 1,
          })}
        />
      </FormRow>
      <FormRow label={"Price"} error={errors?.price?.message}>
        <Input
          onChange={(e) => setPrice(e.target.value)}
          type="number"
          id="price"
          defaultValue={0}
          min={0}
          {...register("price", {
            required: "This field is required",
            min: 0,
          })}
        />
      </FormRow>
      <FormRow label={"Total"} error={errors?.total?.message}>
        <Input
          className={styles.total}
          type="number"
          id="total"
          value={total}
          disabled
          {...register("total")}
        />
      </FormRow>
      <button className={styles.iconBox}>
        <img className={styles.deleteIcon} src={deleteIcon} alt="Delete Icon" />
      </button>
    </li>
  );
}

export default FormListItem;
