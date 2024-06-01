import logo from "../assets/logo.svg";
import sun from "../assets/icon-sun.svg";
import moon from "../assets/icon-moon.svg";
import avatar from "../assets/image-avatar.jpg";

import styles from "./Header.module.scss";
import { useDarkMode } from "../context/DarkModeContext";

function Header() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

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
        <div
          className={styles.toggleIcon}
          onClick={() => toggleDarkMode((prev) => !prev)}
        >
          <img
            src={!isDarkMode ? sun : moon}
            alt="Sun logo"
            className={styles.icon}
          />
        </div>
        <hr className={styles.divider} />
        <div className={styles.btn}>
          <img src={avatar} alt="Avatar Icon" className={styles.avatar} />
        </div>
      </div>
    </header>
  );
}

export default Header;
