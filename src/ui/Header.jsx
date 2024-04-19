import logo from "../assets/logo.svg";
import sun from "../assets/icon-sun.svg";
import moon from "../assets/icon-moon.svg";
import avatar from "../assets/image-avatar.jpg";

import styles from "./Header.module.scss";

function Header() {
  function handleToTop() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }

  return (
    <header className={styles.header}>
      <div className={styles.left_container} onClick={handleToTop}>
        <img src={logo} className={styles.logo} />
      </div>

      <div className={styles.right_container}>
        <img src={sun} alt="Sun logo" className={styles.toggleIcon} />
        <hr className={styles.divider} />
        <button className={styles.btn}>
          <img src={avatar} alt="Avatar Icon" className={styles.avatar} />
        </button>
      </div>
    </header>
  );
}

export default Header;
