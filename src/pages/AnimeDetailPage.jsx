import React from "react";
import AnimeDetail from "../components/animeDetail/AnimeDetail";
import { defer } from "react-router-dom";
import { sendRequest } from "../shared/utils/sendRequest";

function AnimeDetailPage() {
  return <AnimeDetail />;
}

export default AnimeDetailPage;

async function loadAnimeById(id) {
  return sendRequest(`https://api.jikan.moe/v4/anime/${id}`);
}

async function loadAnimeStaff(id) {
  return sendRequest(`https://api.jikan.moe/v4/anime/${id}/characters`);
}

async function loadAnimeReviews(id, page) {
  return sendRequest(
    `https://api.jikan.moe/v4/anime/${id}/reviews?page=${page}`
  );
}

async function loadAnimeRecommend(id) {
  return sendRequest(
    `https://api.jikan.moe/v4/anime/${id}/recommendations`,
    true
  );
}

async function loadAnimeEpisodes(id, page) {
  return sendRequest(`https://api.jikan.moe/v4/anime/${id}/episodes`, true);
}

async function loadNews(id) {
  return sendRequest(`https://api.jikan.moe/v4/anime/${id}/news`, true);
}

export async function loader({ request, params }) {
  const id = params.id;
  const page = 1;
  return defer({
    data: loadAnimeById(id),
    characters: loadAnimeStaff(id),
    reviews: loadAnimeReviews(id, page),
    recommend: loadAnimeRecommend(id),
    episodes: loadAnimeEpisodes(id),
    news: loadNews(id),
  });
}
