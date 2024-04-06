import React from "react";
import styles from "./NewsItem.module.css";
import { Link, useParams } from "react-router-dom";

function NewsItem({ item }) {
  const id = useParams().id;
  const formattedDate = new Date(item.date).toLocaleDateString("en-EN", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });

  return (
    <div className={styles.item}>
      <div className={styles.info}>
        <img src={item.images.jpg.image_url} alt={"img"} />
        <Link to={`/${id}/newsDetail/${item.mal_id}`}>{item.title}</Link>
      </div>
      <div className={styles.date}>{formattedDate}</div>
    </div>
  );
}

export default NewsItem;
