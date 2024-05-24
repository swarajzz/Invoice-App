import styles from "./Overlay.module.scss";

function Overlay({ isOpen, handleOverlayClick }) {
  return (
    <div
      className={`${styles.overlay} ${isOpen ? styles.in : ""}`}
      onClick={handleOverlayClick}
    ></div>
  );
}

export default Overlay;

// ${
//     something ? styles.out : ""
//   }
