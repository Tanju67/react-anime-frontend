import React from "react";
import styles from "./Modal.module.css";

function Modal({ children, className, onClick }) {
  return (
    <div className={`${styles.modal} ${className}`}>
      <div onClick={onClick} className={styles.backDrop}></div>
      <div className={styles.overlay}>
        <span onClick={onClick} className={styles.clsBtn}>
          &times;
        </span>
        {children}
      </div>
    </div>
  );
}

export default Modal;
