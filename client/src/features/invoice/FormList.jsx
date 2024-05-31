import styles from "../styles/FormList.module.scss";
import FormListItem from "./FormListItem";

function FormList({ fields, register, errors, watch, remove, setValue }) {
  // console.log(fields);
  return (
    <ul className={styles.itemList}>
      {fields.map((field, index) => (
        <FormListItem
          register={register}
          key={field.id}
          index={index}
          errors={errors}
          watch={watch}
          remove={remove}
          setValue={setValue}
        />
      ))}
    </ul>
  );
}

export default FormList;
