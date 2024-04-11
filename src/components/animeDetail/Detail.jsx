/* eslint-disable react/prop-types */
import React, { useEffect } from "react";
import styles from "./Detail.module.css";
import { Link } from "react-router-dom";
import Button from "../../shared/UIElements/Button";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useControlWatchlist } from "../../shared/hooks/useControlWatchlist";

function Detail({ anime, onBg }) {
  const bg = anime?.images.jpg.large_image_url;
  const navigate = useNavigate();
  const idAnime = useParams().id;
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const [isWatchlist] = useControlWatchlist(idAnime);

  const addWatchlistHandler = async () => {
    if (!isLoggedIn) {
      navigate("/login");
      return;
    }
    const token = localStorage.getItem("token");
    try {
      fetch("http://localhost:5000/api/v1/anime", {
        method: "POST",
        body: JSON.stringify({
          title: anime?.title_english || anime?.title,
          image: anime?.images.jpg.large_image_url,
          animeId: anime.mal_id,
        }),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      navigate("/watchlist");
    } catch (error) {
      console.log(error);
    }
  };

  const deleteFromWatchlist = () => {
    const token = localStorage.getItem("token");
    try {
      fetch("http://localhost:5000/api/v1/anime/" + idAnime, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      navigate("/watchlist");
    } catch (error) {
      console.log(error);
    }
  };

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

            <Button
              onClick={isWatchlist ? deleteFromWatchlist : addWatchlistHandler}
              size={"sm"}
              rounded={true}
            >
              {isWatchlist ? "Delete from watchlist" : "Add to watchlist"}
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
