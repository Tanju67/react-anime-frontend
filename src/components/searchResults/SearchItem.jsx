/* eslint-disable react/prop-types */
import styles from "./SearchItem.module.css";
import { useNavigate } from "react-router-dom";

function SearchItem({ item }) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/anime/${item.mal_id}`)}
      className={styles.item}
    >
      <div className={styles.imgBox}>
        <img src={item.images.jpg.image_url} alt="" />
      </div>
      <div className={styles.infoBox}>
        <p className={styles.title}>{item.title_english || item.title}</p>
        <p className={styles.info}>
          {item.aired && <span>📅{item.aired.prop.from.year}</span>}
          {item.score && <span>⭐{item.score}</span>}
          {item.duration && <span>⏳{item.duration}</span>}
        </p>
      </div>
    </div>
  );
}

export default SearchItem;
