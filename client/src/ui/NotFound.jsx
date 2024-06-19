import { Link } from "react-router-dom";
import NotFoundImage from "../assets/404-img.jpg";
import styles from "./NotFound.module.scss";

const NotFound = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.imageBox}>
          <img
            src={NotFoundImage}
            alt="404 Error"
            className={styles.notFoundImage}
          />
        </div>
        <div className={styles.textBox}>
          <h1 className={styles.title}>Sorry</h1>
          <p className={styles.message}>
            The page you are looking for cannot be found.
          </p>
          <Link className="btn notFound-link" to="/">
            Back to the invoices...
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
