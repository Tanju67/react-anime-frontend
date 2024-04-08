import React from "react";
import styles from "./SearchItem.module.css";
import { useNavigate } from "react-router-dom";

function SearchItem({ item }) {
  const navigate = useNavigate();
  console.log(item);
  return (
    <div
      onClick={() => navigate(`/anime/${item.mal_id}`)}
      className={styles.item}
    >
      <div className={styles.imgBox}>
        <img src={item.images.jpg.image_url} alt="" />
      </div>
      <div className={styles.infoBox}>
        <p className={styles.title}>{item.title_english || item.title}</p>
        <p className={styles.info}>
          {item.aired && <span>📅{item.aired.prop.from.year}</span>}
          {item.score && <span>⭐{item.score}</span>}
          {item.duration && <span>⏳{item.duration}</span>}
        </p>
      </div>
    </div>
  );
}

export default SearchItem;

const x = {
  mal_id: 44003,
  url: "https://myanimelist.net/anime/44003/Xi_Yangyang_Yu_Hui_Tailang__Xi_yangyang_You_Shibo",
  images: {
    jpg: {
      image_url: "https://cdn.myanimelist.net/images/anime/1356/115293.jpg",
      small_image_url:
        "https://cdn.myanimelist.net/images/anime/1356/115293t.jpg",
      large_image_url:
        "https://cdn.myanimelist.net/images/anime/1356/115293l.jpg",
    },
    webp: {
      image_url: "https://cdn.myanimelist.net/images/anime/1356/115293.webp",
      small_image_url:
        "https://cdn.myanimelist.net/images/anime/1356/115293t.webp",
      large_image_url:
        "https://cdn.myanimelist.net/images/anime/1356/115293l.webp",
    },
  },
  trailer: {
    youtube_id: null,
    url: null,
    embed_url: null,
    images: {
      image_url: null,
      small_image_url: null,
      medium_image_url: null,
      large_image_url: null,
      maximum_image_url: null,
    },
  },
  approved: true,
  titles: [
    {
      type: "Default",
      title: "Xi Yangyang Yu Hui Tailang: Xi yangyang You Shibo",
    },
    {
      type: "Synonym",
      title: "Around The World in 20 Days",
    },
    {
      type: "Japanese",
      title: "喜羊羊與灰太狼之喜羊羊游世博",
    },
    {
      type: "English",
      title: "Pleasant Goat and Big Big Wolf: Pleasant Goat Touring the Expo",
    },
  ],
  title: "Xi Yangyang Yu Hui Tailang: Xi yangyang You Shibo",
  title_english:
    "Pleasant Goat and Big Big Wolf: Pleasant Goat Touring the Expo",
  title_japanese: "喜羊羊與灰太狼之喜羊羊游世博",
  title_synonyms: ["Around The World in 20 Days"],
  type: "ONA",
  source: "Original",
  episodes: 20,
  status: "Finished Airing",
  airing: false,
  aired: {
    from: "2010-08-01T00:00:00+00:00",
    to: null,
    prop: {
      from: {
        day: 1,
        month: 8,
        year: 2010,
      },
      to: {
        day: null,
        month: null,
        year: null,
      },
    },
    string: "Aug 1, 2010 to ?",
  },
  duration: "5 min per ep",
  rating: "PG - Children",
  score: null,
  scored_by: null,
  rank: 14385,
  popularity: 20648,
  members: 179,
  favorites: 0,
  synopsis: null,
  background: null,
  season: null,
  year: null,
  broadcast: {
    day: null,
    time: null,
    timezone: null,
    string: null,
  },
  producers: [],
  licensors: [],
  studios: [],
  genres: [
    {
      mal_id: 2,
      type: "anime",
      name: "Adventure",
      url: "https://myanimelist.net/anime/genre/2/Adventure",
    },
    {
      mal_id: 4,
      type: "anime",
      name: "Comedy",
      url: "https://myanimelist.net/anime/genre/4/Comedy",
    },
  ],
  explicit_genres: [],
  themes: [],
  demographics: [
    {
      mal_id: 15,
      type: "anime",
      name: "Kids",
      url: "https://myanimelist.net/anime/genre/15/Kids",
    },
  ],
};
