import React from "react";
import styles from "./Button.module.css";
import { Link } from "react-router-dom";

function Button({ children, className, type, size, to, rounded }) {
  if (to) {
    return (
      <Link
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
      type={type}
      className={`${styles.btn} ${className} ${
        size === "sm" ? styles.btn_sm : ""
      } ${size === "md" ? styles.btn_md : ""} ${
        size === "large" ? styles.btn_large : ""
      }`}
    >
      {children}
    </button>
  );
}

export default Button;
