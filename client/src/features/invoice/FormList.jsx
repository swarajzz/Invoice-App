import styles from "../styles/FormList.module.scss";
import FormListItem from "./FormListItem";

function FormList({ counter }) {
  return (
    <ul className={styles.itemList}>
      {Array.from({ length: counter }).map((_, i) => (
        <FormListItem key={i} />
      ))}
    </ul>
  );
}

export default FormList;
