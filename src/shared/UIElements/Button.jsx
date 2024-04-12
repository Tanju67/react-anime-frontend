/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import styles from "./Button.module.css";

function Button({ children, className, type, size, to, rounded, onClick }) {
  if (to) {
    return (
      <Link
        onClick={onClick}
        to={to}
        type={type}
        className={`${styles.btn} ${className} ${
          size === "sm" ? styles.btn_sm : ""
        } ${size === "md" ? styles.btn_md : ""} ${
          size === "large" ? styles.btn_large : ""
        } ${rounded === true ? styles.rounded : ""}`}
      >
        {children}
      </Link>
    );
  }
  return (
    <button
      onClick={onClick}
      type={type}
      className={`${styles.btn} ${className} ${
        size === "sm" ? styles.btn_sm : ""
      } ${size === "md" ? styles.btn_md : ""} ${
        size === "large" ? styles.btn_large : ""
      } ${rounded === true ? styles.rounded : ""}`}
    >
      {children}
    </button>
  );
}

export default Button;
