import FormRow from "../../ui/FormRow";
import styles from "../styles/FormListItem.module.scss";
import deleteIcon from "../../assets/icon-delete.svg";
import { useEffect, useState } from "react";
import Input from "../../ui/Input";

function FormListItem({ register, errors, watch, setValue, index }) {
  console.log(errors);
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
    value = parseFloat(value.toFixed(2));
    setTotal(value);
    setValue(`items[${index}].total`, value);
  }, [quantity, price, index, setValue]);

  return (
    <li className={styles.listItem}>
      <FormRow
        label={"Item Name"}
        error={errors?.items?.[index]?.name?.message}
      >
        <Input
          type="text"
          id={`name-${index}`}
          placeholder="New Item"
          {...register(`items[${index}].name`, {
            required: "This field is required",
          })}
        />
      </FormRow>
      <FormRow label={"Qty."} error={errors?.items?.[index]?.quantity?.message}>
        <Input
          min={1}
          type="number"
          id={`quantity-${index}`}
          defaultValue={1}
          {...register(`items[${index}].quantity`, {
            required: "This field is required",
            valueAsNumber: true,
            min: 1,
            onChange: (e) => {
              setQuantity(+e.target.value);
            },
          })}
        />
      </FormRow>
      <FormRow label={"Price"} error={errors?.items?.[index]?.price?.message}>
        <Input
          type="number"
          id={`price-${index}`}
          min={0}
          defaultValue={0}
          step=".000001"
          {...register(`items[${index}].price`, {
            required: "This field is required",
            valueAsNumber: true,
            min: 0,
            onChange: (e) => {
              setPrice(+e.target.value);
            },
          })}
        />
      </FormRow>
      <FormRow label={"Total"} error={errors?.items?.[index]?.total?.message}>
        <Input
          className={styles.total}
          type="number"
          id={`total-${index}`}
          value={total}
          readOnly
          {...register(`items[${index}].total`, {
            valueAsNumber: true,
          })}
        />
      </FormRow>
      <div className={styles.iconBox}>
        {/* <img className={styles.deleteIcon} src={deleteIcon} alt="Delete Icon" /> */}
        <svg width="13" height="16" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M11.583 3.556v10.666c0 .982-.795 1.778-1.777 1.778H2.694a1.777 1.777 0 01-1.777-1.778V3.556h10.666zM8.473 0l.888.889h3.111v1.778H.028V.889h3.11L4.029 0h4.444z"
            fill="currentColor"
            fillRule="nonzero"
          />
        </svg>
      </div>
    </li>
  );
}

export default FormListItem;
