/* eslint-disable react/prop-types */
import styles from "./SliderItem.module.css";
import Logo from "../Logo";

function SliderItem({ item, similar, watchlist }) {
  let image, year, title, id;
  if (watchlist) {
    image = item.image;
    year = item.year;
    title = item.title;
    id = item.animeId;
  } else {
    image = !similar
      ? item.images.jpg.large_image_url
      : item.entry.images.jpg.large_image_url;
    year =
      item?.year ||
      item?.published?.prop?.from?.year ||
      item?.aired?.prop?.from?.year;
    title = !similar ? item.title_english || item.title : item.entry.title;
    id = !similar ? item.mal_id : item.entry.mal_id;
  }

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
        {!similar && <p>{year}</p>}
      </div>
    </div>
  );
}

export default SliderItem;
