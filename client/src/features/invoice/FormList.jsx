import styles from "../styles/FormList.module.scss";
import FormListItem from "./FormListItem";

function FormList() {
  return (
    <ul className={styles.itemList}>
      <FormListItem />
    </ul>
  );
}

export default FormList;
