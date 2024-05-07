/* eslint-disable react/prop-types */
import { Link, useParams } from "react-router-dom";
import styles from "./CharacterDetail.module.css";
import Button from "../../shared/UIElements/Button";
import { formatDate } from "../../shared/utils/helper";

function CharacterDetail({ data, actor }) {
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
          <div className={styles.flexBox}>
            <div className={styles.imgBoxSmall}>
              <img src={data.images.jpg.image_url} alt={data.name} />
            </div>
            <div>
              <h2>{data.name}</h2>
              {actor && (
                <p className={styles.birth}>
                  <span>Birthday:</span>
                  <span>{formatDate(data.birthday)}</span>
                </p>
              )}
              {!actor && data?.nicknames?.length > 0 && (
                <div className={styles.nick}>
                  <span>Nicknames:</span>{" "}
                  <ul>
                    {data?.nicknames?.map((item, i) => (
                      <li key={i}>{item},</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>

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
