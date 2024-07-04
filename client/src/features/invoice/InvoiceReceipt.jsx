import styles from "../styles/InvoiceReceipt.module.scss";

function InvoiceReceipt({ items }) {
  const totalPrice = items.reduce(
    (acc, item) => acc + item.quantity * item.price,
    0
  );

  return (
    <div className={styles.receipt_container}>
      <div className={styles.wrapper}>
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
            {items.map((item) => (
              <tr key={item._id}>
                <td className={styles.itemName}>{item.name}</td>
                <td>{item.quantity}</td>
                <td>$ {item.price.toFixed(2)}</td>
                <td className={styles.total}>
                  $ {parseFloat(item.total).toFixed(2)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className={styles.phoneResponsive}>
          {items.map((item) => (
            <div className={styles.phoneItems} key={item._id}>
              <div>
                <p className={styles.itemName}>{item.name}</p>
                <p className={styles.quantity}>1 x $ {item.price.toFixed(2)}</p>
              </div>

              <div>
                <p className={styles.itemName}>$ {item.total.toFixed(2)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.total_container}>
        <p>Grand Total</p>
        <p className={styles.totalValue}>${totalPrice.toFixed(2)}</p>
      </div>
    </div>
  );
}

export default InvoiceReceipt;
