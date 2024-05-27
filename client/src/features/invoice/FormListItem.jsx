import FormRow from "../../ui/FormRow";
import styles from "../styles/FormListItem.module.scss";
import deleteIcon from "../../assets/icon-delete.svg";
import { useEffect, useState } from "react";
import Input from "../../ui/Input";

function FormListItem({ register, errors, watch, setValue, index }) {
  // const quantity = watch("quantity");
  // const price = watch("price");

  // useEffect(() => {
  //   let value = quantity * price;
  //   value = parseFloat(value).toFixed(2);
  //   setValue("total", value);
  // }, [quantity, price, setValue]);
  const [quantity, setQuantity] = useState(1);
  const [price, setPrice] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    let value = quantity * price;
    value = parseFloat(value).toFixed(2);
    setTotal(value);
  }, [quantity, price]);

  return (
    <li className={styles.listItem}>
      <FormRow
        label={"Item Name"}
        error={errors?.items?.[index]?.name?.message}
        // error={errors?.[`items[${index}]?.name`]?.message}
      >
        <Input
          type="text"
          id="name"
          placeholder="abc"
          {...register(`items[${index}].name`, {
            required: "This field is required",
          })}
        />
      </FormRow>
      <FormRow label={"Qty."} error={errors?.items?.[index]?.quantity?.message}>
        <Input
          min={1}
          type="number"
          id="quantity"
          {...register(`items[${index}].quantity`, {
            required: "This field is required",
            min: 1,
            onChange: (e) => {
              setQuantity(e.target.value);
            },
          })}
        />
      </FormRow>
      <FormRow label={"Price"} error={errors?.items?.[index]?.price?.message}>
        <Input
          type="number"
          id="price"
          min={0}
          {...register(`items[${index}].price`, {
            required: "This field is required",
            min: 0,
            onChange: (e) => {
              setPrice(e.target.value);
            },
          })}
        />
      </FormRow>
      <FormRow label={"Total"} error={errors?.items?.[index]?.total?.message}>
        <Input
          className={styles.total}
          type="number"
          id="total"
          value={total}
          disabled
          {...register(`items[${index}].total`)}
        />
      </FormRow>
      <button className={styles.iconBox}>
        <img className={styles.deleteIcon} src={deleteIcon} alt="Delete Icon" />
      </button>
    </li>
  );
}

export default FormListItem;
