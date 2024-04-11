import React from "react";
import styles from "./SlideItem.module.css";
import Button from "../../shared/UIElements/Button";
import { Link } from "react-router-dom";
import { PiTelevision } from "react-icons/pi";

function SlideItem({
  title,
  synopsis,
  score,
  genre,
  year,
  image,
  trailer,
  id,
}) {
  return (
    <div
      className={styles.item}
      style={{
        backgroundImage: `radial-gradient(
      circle at right,
      rgba(0,0,0, 0),
      rgba(0,0,0, .2),
      rgba(0,0,0, .4),
      rgba(0,0,0, 1),
      rgba(0,0,0, 1)
    ),url(${image})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "right",
        backgroundSize: "50%",
      }}
    >
      <div className={styles.infoBox}>
        <Link to={`anime/${id}`}>
          <h2>{title}</h2>
        </Link>
        <p className={styles.info}>
          <span>⭐{score} / 10</span> <span>📅 {year}</span>
        </p>
        <p className={styles.desc}>{synopsis.slice(0, 300) + "..."}</p>
        <Button className={styles.trailerBtn} to={`trailer/${id}`} size="md">
          <PiTelevision /> <span>Watch Trailer</span>
        </Button>
      </div>
      <div className={styles.imgBox}></div>
    </div>
  );
}

export default SlideItem;
