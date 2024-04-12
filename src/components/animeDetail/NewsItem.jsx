/* eslint-disable react/prop-types */
import { Link, useParams } from "react-router-dom";
import styles from "./NewsItem.module.css";
import { formatDate } from "../../shared/utils/helper";

function NewsItem({ item }) {
  const id = useParams().id;

  return (
    <div className={styles.item}>
      <div className={styles.info}>
        {item.images.jpg.image_url && (
          <img src={item.images.jpg.image_url} alt={"img"} />
        )}
        <Link to={`/${id}/newsDetail/${item.mal_id}`}>{item.title}</Link>
      </div>
      <div className={styles.date}>{formatDate(item.date)}</div>
    </div>
  );
}

export default NewsItem;
