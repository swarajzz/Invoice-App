import styles from "./GoBack.module.scss";
import backArrow from "../assets/icon-arrow-left.svg";
import { Link } from "react-router-dom";

function GoBack() {
  return (
    <div className={styles.link_container}>
      <img src={backArrow} alt="Back Arrow Icon" />
      <Link to="/" className={styles.link}>
        Go back
      </Link>
    </div>
  );
}

export default GoBack;
