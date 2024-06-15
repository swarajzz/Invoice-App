import styles from "./Input.module.scss";
import { forwardRef } from "react";

const Input = forwardRef(({ type, id, icon, ...rest }, ref) => {
  return (
    <>
      <div className={styles.input}>
        <input type={type} id={id} ref={ref} {...rest} />
        {icon && (
          <div className={styles.icon}>
            <ion-icon name={icon}></ion-icon>
          </div>
        )}
      </div>
    </>
  );
});

Input.displayName = "Input";

export default Input;
