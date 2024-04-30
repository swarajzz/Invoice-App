import styles from "../styles/InvoiceItem.module.scss";
import rightArrow from "../../assets/icon-arrow-right.svg";
import { useNavigate } from "react-router-dom";
import StatusBox from "../../ui/StatusBox";

function InvoiceItem({ invoice }) {
  const {
    clientAddress,
    id,
    clientName,
    clientEmail,
    createdAt,
    description,
    items,
    paymentDue,
    total,
    senderAddress,
    status,
  } = invoice;

  const {
    city: clientCity,
    country: clientCountry,
    postCode: clientPostCode,
    street: clientStreet,
  } = clientAddress;

  const {
    city: senderCity,
    country: senderCountry,
    postCode: senderPostCode,
    street: senderStreet,
  } = senderAddress;

  const navigate = useNavigate();

  function handleNavigate() {
    navigate(`/invoice`);
  }

  return (
    <li className={styles.invoiceItem} onClick={handleNavigate}>
      <div className={styles.first_container}>
        <p className={styles.id}>
          <span>#</span>
          {id}
        </p>
        <p className={styles.date}>Due {paymentDue}</p>
        {/* <p className={styles.name}>{clientName}</p> */}
      </div>

      <div className={styles.second_container}>
        <div className={styles.sub_container}>
          <p className={styles.name}>{clientName}</p>
          {/* <p className={styles.date}>Due {paymentDue}</p> */}
          <p className={styles.amount}>£ {total}</p>
        </div>

        <div className={styles.wrapper}>
          <StatusBox type={status} />
          <img src={rightArrow} alt="" />
        </div>
      </div>
    </li>
  );
}

export default InvoiceItem;