import React from "react";
import styles from "./SliderItem.module.css";
import Logo from "../Logo";

function SliderItem({ image, title, year }) {
  return (
    <div className={styles.item}>
      <div className={styles.imgBox}>
        <img className={styles.itemImg} src={image} alt={title} />
        <div className={styles.hoverElement}>
          <Logo className={styles.hoverBtn} />
        </div>
      </div>
      <div className={styles.infoBox}>
        <p>{title}</p>
        <p>{year}</p>
      </div>
    </div>
  );
}

export default SliderItem;
