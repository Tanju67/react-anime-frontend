import React from "react";
import styles from "./SliderItem.module.css";
import Logo from "../Logo";

function SliderItem({ item, similar }) {
  const image = !similar
    ? item.images.jpg.large_image_url
    : item.entry.images.jpg.large_image_url;
  const year =
    item?.year ||
    item?.published?.prop?.from?.year ||
    item?.aired?.prop?.from?.year;
  const title = !similar ? item.title_english || item.title : item.entry.title;
  const id = !similar ? item.mal_id : item.entry.mal_id;
  if (similar) {
    return (
      <div className={styles.item}>
        <div className={styles.imgBox}>
          <img className={styles.itemImg} src={image} alt={title} />
          <div className={styles.hoverElement}>
            <Logo to={`/anime/${id}`} className={styles.hoverBtn} />
          </div>
        </div>
        <div className={styles.infoBox}>
          <p>{title}</p>
        </div>
      </div>
    );
  }
  return (
    <div className={styles.item}>
      <div className={styles.imgBox}>
        <img className={styles.itemImg} src={image} alt={title} />
        <div className={styles.hoverElement}>
          <Logo to={`anime/${id}`} className={styles.hoverBtn} />
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
