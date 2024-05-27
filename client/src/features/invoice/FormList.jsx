import styles from "../styles/FormList.module.scss";
import FormListItem from "./FormListItem";

function FormList({ fields, register, errors, watch, setValue }) {
  return (
    <ul className={styles.itemList}>
      {fields.map((item, index) => (
        <FormListItem
          register={register}
          key={item.id}
          index={index}
          errors={errors}
          watch={watch}
          setValue={setValue}
        />
      ))}
    </ul>
  );
}

export default FormList;
