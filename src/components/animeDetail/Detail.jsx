import React, { useEffect } from "react";
import styles from "./Detail.module.css";
import { Link } from "react-router-dom";
import Button from "../../shared/UIElements/Button";

function Detail({ anime, onBg }) {
  const bg = anime?.images.jpg.large_image_url;
  useEffect(() => {
    onBg(bg);
  }, [bg]);
  return (
    <div className={styles.container}>
      <div className={styles.subNav}>
        <Link to={"/"}>&larr; Home</Link>
      </div>
      <div className={styles.content}>
        <div className={styles.imgBox}>
          <img src={anime?.images.jpg.large_image_url} alt="" />
        </div>
        <div className={styles.infoBox}>
          <h2 className={styles.title}>{anime?.title_english}</h2>
          <p className={styles.year}>{anime?.year}</p>
          <p className={styles.desc}>
            <span>{anime?.episodes} episodes</span>{" "}
            <span>{anime?.duration}</span>
            <span>{anime?.score}/10</span>
          </p>
          <div className={styles.btnBox}>
            <Button to={`/trailer/${anime.mal_id}`} size={"sm"} rounded={true}>
              Watch Trailer
            </Button>
            <Button size={"sm"} rounded={true}>
              Add Watchlist
            </Button>
          </div>

          <p className={styles.synopsis}>{anime?.synopsis}</p>
          <div className={styles.genre}>
            <span>Genre</span>
            <ul>
              {anime?.genres.map((item) => (
                <li key={item.mal_id}>{item.name},</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Detail;
