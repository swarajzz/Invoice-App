import styles from "../styles/InvoiceItem.module.scss";
import rightArrow from "../../assets/icon-arrow-right.svg";
import { Link } from "react-router-dom";
import StatusBox from "../../ui/StatusBox";
import useCheckMobileScreen from "../../hooks/useCheckMobileScreen";
import { formatDate } from "../../utils/helper";

function InvoiceItem({ invoice }) {
  const { id, clientName, paymentDue, total, status } = invoice;
  const isMobile = useCheckMobileScreen();

  // function handleNavigate() {
  //   navigate(`/invoice/:${id}`, {
  //     state: { id },
  //   });
  // }

  return (
    <li className={styles.invoiceItem}>
      <Link className={styles.link} to={`/invoice/:${id}`}>
        <div className={styles.first_container}>
          <p className={styles.id}>
            <span>#</span>
            {id}
          </p>
          <p className={styles.date}>Due {formatDate(new Date(paymentDue))}</p>
          {isMobile ? <p className={styles.amount}>£ {total}</p> : null}
        </div>

        <div className={styles.second_container}>
          <div className={styles.sub_container}>
            <p className={styles.name}>{clientName}</p>
            {!isMobile ? <p className={styles.amount}>£ {total}</p> : null}
          </div>

          <div className={styles.wrapper}>
            <StatusBox type={status} />

            {!isMobile ? <img src={rightArrow} alt="Right arrow icon" /> : null}
          </div>
        </div>
      </Link>
    </li>
  );
}

export default InvoiceItem;
