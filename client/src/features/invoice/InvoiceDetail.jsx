import styles from "../styles/InvoiceDetail.module.scss";
import GoBack from "../../ui/GoBack";
import StatusContainer from "../../ui/StatusContainer";
import { formatDate } from "../../utils/helper";
import InvoiceReceipt from "./InvoiceReceipt";

function InvoiceDetail({ invoice }) {
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

  return (
    <>
      <GoBack />
      <StatusContainer invoice={invoice} invoiceId={id} status={status} />

      <div className={styles.detail_wrapper}>
        <div className={styles.detail_container}>
          <div className={styles.general}>
            <h5 className={styles.id}>
              <span>#</span>
              {id}
            </h5>
            <p className={styles.content}>{description}</p>
          </div>

          <div className={styles.senderAddress}>
            <p className={styles.senderStreet}>{senderStreet}</p>
            <p className={styles.senderCity}>{senderCity}</p>
            <p className={styles.senderPostCode}>{senderPostCode}</p>
            <p className={styles.senderCountry}>{senderCountry}</p>
          </div>

          <div className={styles.dateBox}>
            <div className={styles.invoiceDateBox}>
              <p>Invoice Date</p>
              <h4 className={styles.invoiceDate}>{formatDate(createdAt)}</h4>
            </div>

            <div className={styles.dueBox}>
              <p>Payment Due</p>
              <h4 className={styles.dueDate}>{formatDate(paymentDue)}</h4>
            </div>
          </div>

          <div className={styles.clientAddress}>
            <p>Bill To</p>
            <h4 className={styles.clientName}>{clientName}</h4>
            <p className={styles.clientStreet}>{clientStreet}</p>
            <p className={styles.clientCity}>{clientCity}</p>
            <p className={styles.clientPost}>{clientPostCode}</p>
            <p className={styles.clientCountry}>{clientCountry}</p>
          </div>

          <div className={styles.sentTo}>
            <p className={styles.detail_title}>Sent to</p>
            <h4 className={styles.clientEmail}>{clientEmail}</h4>
          </div>
        </div>

        <InvoiceReceipt items={items} />
      </div>
    </>
  );
}

export default InvoiceDetail;
