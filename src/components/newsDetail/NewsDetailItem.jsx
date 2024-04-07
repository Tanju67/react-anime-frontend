import React from "react";
import styles from "./NewsDetailItem.module.css";
import { Link, useParams } from "react-router-dom";
import Button from "../../shared/UIElements/Button";

function NewsDetailItem({ data }) {
  const newsId = useParams().newsId;
  const id = useParams().id;
  const newsItem = data.filter((item) => +item.mal_id === +newsId);

  const formattedDate = new Date(newsItem[0].date).toLocaleDateString("en-EN", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });
  return (
    <div className={styles.page}>
      <div className={styles.subNav}>
        <Link to={`/anime/${id}`}>&larr; Anime Detail</Link>
      </div>
      <div className={styles.container}>
        {newsItem[0].images.jpg.image_url && (
          <div className={styles.imgBox}>
            <img
              src={newsItem[0].images.jpg.image_url}
              alt={newsItem[0].title}
            />
          </div>
        )}
        <div className={styles.infoBox}>
          <h2>{newsItem[0].title}</h2>
          <p className={styles.author}>
            <span>Author</span>
            <span>{newsItem[0].author_username}</span>
          </p>
          <p className={styles.date}>
            <span>Published Date</span>
            <span>{formattedDate}</span>
          </p>
          <p className={styles.news}>{newsItem[0].excerpt}</p>
          <Button to={newsItem[0].forum_url} size={"sm"}>
            Read More
          </Button>
        </div>
      </div>
    </div>
  );
}

export default NewsDetailItem;
