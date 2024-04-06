import React from "react";
import styles from "./CharacterDetail.module.css";
import { Link, useParams } from "react-router-dom";
import Button from "../../shared/UIElements/Button";

function CharacterDetail({ data, actor }) {
  console.log(data);
  const id = useParams().id;
  const formattedDate = new Date(data.birthday).toLocaleDateString("en-EN", {
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
        <div className={styles.imgBox}>
          <img src={data.images.jpg.image_url} alt={data.name} />
        </div>
        <div className={styles.infoBox}>
          <h2>{data.name}</h2>
          {actor && (
            <p className={styles.birth}>
              <span>Birthday:</span>
              <span>{formattedDate}</span>
            </p>
          )}
          {!actor && data?.nicknames?.length > 0 && (
            <p className={styles.nick}>
              <span>Nicknames:</span>{" "}
              <ul>
                {data?.nicknames?.map((item, i) => (
                  <li key={i}>{item},</li>
                ))}
              </ul>
            </p>
          )}
          <p className={styles.about}>{data.about}</p>
          {actor && data?.website_url?.length > 0 && (
            <Button to={data.website_url} size={"sm"}>
              Website
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}

export default CharacterDetail;
