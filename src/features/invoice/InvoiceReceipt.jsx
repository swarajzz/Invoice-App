import styles from "../styles/InvoiceReceipt.module.scss";

function InvoiceReceipt({ items }) {
  console.log(items);

  const totalPrice = items.reduce(
    (acc, item) => acc + item.quantity * item.price,
    0
  );

  return (
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
          {items.map((item) => (
            <tr key={item.name}>
              <td className={styles.itemName}>{item.name}</td>
              <td>{item.quantity}</td>
              <td>$ {item.price}</td>
              <td className={styles.total}>$ {item.quantity * item.price}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className={styles.total_container}>
        <p>Grand Total</p>
        <p className={styles.totalValue}>${totalPrice}</p>
      </div>
    </div>
  );
}

export default InvoiceReceipt;
