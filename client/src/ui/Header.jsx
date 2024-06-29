import logo from "../assets/logo.svg";
import sun from "../assets/icon-sun.svg";
import moon from "../assets/icon-moon.svg";
import avatar from "../assets/image-avatar.jpg";

import styles from "./Header.module.scss";
import { useDarkMode } from "../context/DarkModeContext";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { logout } from "../features/auth/authSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logoutUser } from "../services/apiAuth";

function Header() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  const [popup, setPopup] = useState(false);
  const navigate = useNavigate();

  const dispatch = useDispatch();

  function handleToTop() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }

  const { mutate } = useMutation({
    mutationFn: () => {
      return logoutUser();
    },
    onSuccess: () => {
      toggleDarkMode(false);
      toast.success("Successfully Logged Out");
      dispatch(logout());
      navigate("/auth/login");
    },
    onError: (err) => {
      toast.error(err.response.data.message);
    },
  });

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
        <div className={styles.btn} onClick={() => setPopup((prev) => !prev)}>
          <img src={avatar} alt="Avatar Icon" className={styles.avatar} />
          {popup && (
            <div onClick={() => mutate()} className={styles.popup}>
              Log Out
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
