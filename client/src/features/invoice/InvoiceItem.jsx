import styles from "../styles/InvoiceItem.module.scss";
import rightArrow from "../../assets/icon-arrow-right.svg";
import { useNavigate } from "react-router-dom";
import StatusBox from "../../ui/StatusBox";
import useCheckMobileScreen from "../../hooks/useCheckMobileScreen";
import { formatDate } from "../../utils/helper";

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

  const isMobile = useCheckMobileScreen();

  function handleNavigate() {
    navigate(`/invoice/:${id}`, {
      state: { invoice },
    });
  }

  return (
    <li className={styles.invoiceItem} onClick={handleNavigate}>
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

          {!isMobile ? <img src={rightArrow} alt="" /> : null}
        </div>
      </div>
    </li>
  );
}

export default InvoiceItem;
