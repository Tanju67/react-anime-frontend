/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { SlCalender } from "react-icons/sl";
import { PiTelevisionSimpleDuotone } from "react-icons/pi";
import { GiDuration } from "react-icons/gi";
import { MdMovieEdit } from "react-icons/md";
import { PiTelevision } from "react-icons/pi";

import styles from "./Detail.module.css";
import Button from "../../shared/UIElements/Button";
import { useControlWatchlist } from "../../shared/hooks/useControlWatchlist";
import HomeNav from "../../shared/UIElements/HomeNav";
import Spinner from "../../shared/UIElements/Spinner";
import Modal from "../../shared/UIElements/Modal";
import { fetchUserAllWatchlist } from "../../shared/store/auth-action";

function Detail({ anime, onBg }) {
  const navigate = useNavigate();
  const idAnime = useParams().id;
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const [isWatchlist] = useControlWatchlist(idAnime);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();

  const bg = anime?.images.jpg.large_image_url;

  const addWatchlistHandler = async () => {
    if (!isLoggedIn) {
      navigate("/login");
      return;
    }
    const token = localStorage.getItem("token");
    try {
      setIsLoading(true);
      const res = await fetch("http://localhost:5000/api/v1/anime", {
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

      if (!res.ok) {
        throw new Error(
          "Something went wrong by adding anime to watchlist. Please try again later"
        );
      }
      dispatch(fetchUserAllWatchlist());
      setIsLoading(false);
      navigate("/watchlist");
    } catch (error) {
      setIsLoading(false);
      setError(error.message);
    }
  };

  const deleteFromWatchlist = async () => {
    const token = localStorage.getItem("token");
    try {
      setIsLoading(true);
      const res = await fetch("http://localhost:5000/api/v1/anime/" + idAnime, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      if (!res.ok) {
        throw new Error(
          "Something went wrong by deleting anime from watchlist. Please try again later"
        );
      }
      setIsLoading(false);
      navigate("/watchlist");
    } catch (error) {
      setIsLoading(false);
      setError(error.message);
    }
  };

  useEffect(() => {
    onBg(bg);
  }, [bg]);
  return (
    <div className={styles.container}>
      <HomeNav />
      {isLoading && <Spinner />}
      {error && !isLoading && (
        <Modal className="error" onClick={() => setError(null)}>
          <h2>Error Occured!</h2>
          <p>{error}</p>
        </Modal>
      )}
      <div className={styles.content}>
        <div className={styles.imgBox}>
          <img src={anime?.images.jpg.large_image_url} alt="" />
        </div>
        <div className={styles.infoBox}>
          <h2 className={styles.title}>{anime?.title_english}</h2>
          <div className={styles.year}>
            <span>
              <SlCalender />
            </span>
            <span>{anime?.year || anime?.aired.string}</span>
          </div>
          <div className={styles.desc}>
            <p>
              <span>
                <PiTelevisionSimpleDuotone />
              </span>
              <span>{anime?.episodes} episodes</span>
            </p>
            <p>
              <span>
                <GiDuration />
              </span>
              <span>{anime?.duration}</span>
            </p>
            <p>⭐{anime?.score}/10</p>
          </div>
          <div className={styles.btnBox}>
            <Button to={`/trailer/${anime.mal_id}`} size={"sm"} rounded={true}>
              <span>
                <PiTelevision />
              </span>
              <span> Watch Trailer</span>
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
            <span>
              <MdMovieEdit />
              <em>Genre</em>
            </span>
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
