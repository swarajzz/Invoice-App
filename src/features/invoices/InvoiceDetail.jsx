import { Link } from "react-router-dom";
import styles from "../styles/InvoiceDetail.module.scss";
import backArrow from "../../assets/icon-arrow-left.svg";
import Button from "../../ui/Button";

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
            <div className={styles.statusBox}>
              <span></span>
              <p className={styles.status}>paid</p>
            </div>
          </div>
        </div>

        <div className={styles.control_btns}>
          <Button type="edit">Edit</Button>
          <Button type="delete">Delete</Button>
        </div>
      </div>

      <div className={styles.detail_container}>
        <div className={styles.general}>
          <p className={styles.id}>Invoice</p>
          <p className={styles.detail_content}>XM9141</p>
        </div>

        <div className={styles.item2}>
          <p className={styles.detail_title}>Issue Date</p>
          <p className={styles.detail_content}>21 Aug 2021</p>
        </div>

        <div className={styles.item3}>
          <p className={styles.detail_title}>Due Date</p>
          <p className={styles.detail_content}>20 Sep 2021</p>
        </div>

        <div className={styles.item4}>
          <p className={styles.detail_title}>Bill To</p>
          <p className={styles.detail_content}>Jensen Huang</p>
          <p className={styles.detail_content}>NVIDIA Corporation</p>
          <p className={styles.detail_content}>2788 San Tomas Expressway</p>
          <p className={styles.detail_content}>Santa Clara, CA 95051</p>
          <p className={styles.detail_content}>United States</p>
        </div>

        <div className={styles.item5}>
          <p className={styles.detail_title}>Sent to</p>
          <p className={styles.detail_content}></p>
        </div>
      </div>
    </div>
  );
}

export default InvoiceDetail;
