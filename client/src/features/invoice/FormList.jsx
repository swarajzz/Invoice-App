import styles from "../styles/FormList.module.scss";
import FormListItem from "./FormListItem";

function FormList({ counter, register, errors }) {
  return (
    <ul className={styles.itemList}>
      {Array.from({ length: counter }).map((_, i) => (
        <FormListItem register={register} key={i} errors={errors} />
      ))}
    </ul>
  );
}

export default FormList;
