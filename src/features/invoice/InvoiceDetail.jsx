import { Link } from "react-router-dom";
import styles from "../styles/InvoiceDetail.module.scss";
import backArrow from "../../assets/icon-arrow-left.svg";
import Button from "../../ui/Button";
import StatusBox from "../../ui/StatusBox";

function InvoiceDetail() {
  return (
    <div className={styles.invoiceDetail}>
      <div className={styles.link_container}>
        <img src={backArrow} alt="Back Arrow Icon" />
        <Link to="/" className={styles.link}>
          Go back
        </Link>
      </div>

      <div className={styles.status_container}>
        <div className={styles.status_bar}>
          <p>Status</p>
          <div className={styles.wrapper}>
            <StatusBox type={status} />
          </div>
        </div>

        <div className={styles.control_btns}>
          <Button type="edit">Edit</Button>
          <Button type="delete">Delete</Button>
        </div>
      </div>

      <div className={styles.detail_wrapper}>
        <div className={styles.detail_container}>
          <div className={styles.general}>
            <h5 className={styles.id}>
              <span>#</span>RT3080
            </h5>
            <p className={styles.content}>Re-branding</p>
          </div>

          <div className={styles.senderAddress}>
            <p className={styles.senderStreet}>21 Aug 2021</p>
            <p className={styles.senderCity}>Issue Date</p>
            <p className={styles.senderPostCode}>21 Aug 2021</p>
            <p className={styles.senderCountry}>21 Aug 2021</p>
          </div>

          <div className={styles.dateBox}>
            <div className="invoiceDateBox">
              <p>Invoice Date</p>
              <h4 className={styles.invoiceDate}>20 Sep 2021</h4>
            </div>

            <div className={styles.dueBox}>
              <p>Payment Due</p>
              <h4 className={styles.dueDate}>20 Sep 2021</h4>
            </div>
          </div>

          <div className={styles.clientAddress}>
            <p>Bill To</p>
            <h4 className={styles.clientStreet}>Jensen Huang</h4>
            <p className={styles.clientCity}>2788 San Tomas Expressway</p>
            <p className={styles.clientPost}>Santa Clara, CA 95051</p>
            <p className={styles.clientCountry}>United States</p>
            <p className={styles.clientCountry}>United States</p>
          </div>

          <div className={styles.sentTo}>
            <p className={styles.detail_title}>Sent to</p>
            <h4 className={styles.clientEmail}>Jensen Huang</h4>
          </div>
        </div>

        <div className={styles.receipt_container}>
          <table className={styles.receiptTable}>
            <thead>
              <tr>
                <td>Item Name</td>
                <td>QTY.</td>
                <td>Price</td>
                <td>Total</td>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td className={styles.itemName}>Banner Design</td>
                <td>1</td>
                <td>& 156.00</td>
                <td className={styles.total}>$ 400</td>
              </tr>
            </tbody>
          </table>

          <div className={styles.total_container}>
            <p>Grand Total</p>
            <p className={styles.totalValue}>$1800.90</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InvoiceDetail;
