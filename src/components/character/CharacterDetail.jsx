import React from "react";
import styles from "./CharacterDetail.module.css";
import { Link, useParams } from "react-router-dom";

function CharacterDetail({ data }) {
  console.log(data);
  const id = useParams().id;
  return (
    <div className={styles.page}>
      <div className={styles.subNav}>
        <Link to={`/anime/${id}`}>&larr; Anime Detail</Link>
      </div>
      <div className={styles.container}>
        <div className={styles.imgBox}>
          <img src={data.images.jpg.image_url} alt={data.name} />
        </div>
        <div className={styles.infoBox}>
          <h2>{data.name}</h2>
          {data.nicknames.length > 0 && (
            <p className={styles.nick}>
              <span>Nicknames:</span>{" "}
              <ul>
                {data.nicknames.map((item, i) => (
                  <li key={i}>{item},</li>
                ))}
              </ul>
            </p>
          )}
          <p className={styles.about}>{data.about}</p>
        </div>
      </div>
    </div>
  );
}

export default CharacterDetail;
