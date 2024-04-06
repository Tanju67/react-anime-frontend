import React, { useState } from "react";
import styles from "./EpisodeItem.module.css";
import { IoCaretDownSharp } from "react-icons/io5";
import { IoCaretUpSharp } from "react-icons/io5";
import { useParams } from "react-router-dom";

function EpisodeItem({ data, allEp }) {
  const [showSynopsis, setShowSynopsis] = useState(false);
  const [synopsis, setSynopsis] = useState({});
  const [isLoading, setIsLoiding] = useState(false);
  const [error, setError] = useState(null);
  const formattedDate = new Date(data.aired).toLocaleDateString("en-EN", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });

  const animeId = useParams().id;

  const getSynopsis = async (id, episode) => {
    try {
      setIsLoiding(true);
      const res = await fetch(
        `https://api.jikan.moe/v4/anime/${id}/episodes/${episode}`
      );
      if (!res.ok) {
        throw new Error("Something went wrong");
      }
      const data = await res.json();
      setSynopsis(data.data);
      setIsLoiding(false);
    } catch (error) {
      setError(error.message);
      setIsLoiding(false);
    }
  };

  const clickHandler = async () => {
    setShowSynopsis((n) => !n);
    getSynopsis(animeId, data.mal_id);
  };
  return (
    <div className={`${styles.item} ${data.filler ? styles.filler : ""}`}>
      <div className={styles.info}>
        <p className={styles.ep}>Ep:{data.mal_id}</p>
        <p className={`${styles.canon} ${data.filler ? styles.fillerEl : ""}`}>
          <span>{data.filler ? "filler" : "canon"}</span>
        </p>
        <p className={styles.title}>
          <span>{data.title}</span>
        </p>

        <p className={styles.score}>
          ⭐<span>{data.score}</span>
        </p>
        <p className={styles.aired}>
          <span>aired:</span>
          <span>{formattedDate}</span>
        </p>
        {allEp && (
          <p className={styles.icon} onClick={clickHandler}>
            {showSynopsis ? <IoCaretUpSharp /> : <IoCaretDownSharp />}
          </p>
        )}
      </div>
      {showSynopsis && (
        <div className={styles.synopsis}>
          {isLoading && !error && (
            <p style={{ textAlign: "center" }}>Loading...</p>
          )}
          {!isLoading && error && (
            <p style={{ textAlign: "center" }}>{error} </p>
          )}
          <p>{synopsis.synopsis}</p>
        </div>
      )}
    </div>
  );
}

export default EpisodeItem;

const x = {
  mal_id: 1,
  url: "https://myanimelist.net/anime/9253/Steins_Gate/episode/1",
  title: "Turning Point",
  title_japanese: "始まりと終わりのプロローグ",
  title_romanji: "Hajimari to Owari no Prologue ",
  aired: "2011-04-06T00:00:00+00:00",
  score: 4.1,
  filler: false,
  recap: false,
  forum_url: "https://myanimelist.net/forum/?topicid=290985",
};
