import React from "react";
import styles from "./CharItem.module.css";

function CharItem({ image, name, rounded }) {
  return (
    <div className={`${styles.item} ${rounded ? styles.rounded : ""}`}>
      <div className={styles.imgBox}>
        <img src={image} alt="" />
      </div>

      <div className={styles.infoBox}>
        <p>{name}</p>
      </div>
    </div>
  );
}

export default CharItem;
