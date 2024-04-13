/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { PiTelevision } from "react-icons/pi";
import styles from "./SlideItem.module.css";
import Button from "../../shared/UIElements/Button";

function SlideItem({ title, synopsis, score, year, image, id }) {
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
        // backgroundSize: "100%",
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
        <div className={styles.btnBox}>
          <Button className={styles.trailerBtn} to={`trailer/${id}`} size="md">
            <span>
              <PiTelevision />
            </span>
            <span>Watch Trailer</span>
          </Button>
        </div>
      </div>
      <div className={styles.imgBox}></div>
    </div>
  );
}

export default SlideItem;
