import React from "react";
import Home from "../components/home/Home";
import { defer, json } from "react-router-dom";
import { sendRequest } from "../shared/utils/sendRequest";

function HomePage() {
  return <Home />;
}

export default HomePage;

async function loadTopAnime() {
  return sendRequest(
    `https://api.jikan.moe/v4/top/anime?page=1&limit=10&type=tv`
  );
}

async function loadUpcomingSeason() {
  return sendRequest(
    `https://api.jikan.moe/v4/seasons/upcoming?page=1&limit=10`
  );
}

async function loadTopAnimeMovie() {
  return sendRequest(
    `https://api.jikan.moe/v4/top/anime?page=1&limit=10&type=movie`,
    true
  );
}

export async function loader() {
  return defer({
    data: loadTopAnime(),
    upcoming: loadUpcomingSeason(),
    topMovie: loadTopAnimeMovie(),
  });
}
