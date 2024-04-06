import React from "react";
import { sendRequest } from "../shared/utils/sendRequest";
import { defer } from "react-router-dom";
import NewsDetail from "../components/newsDetail/NewsDetail";

function NewsDetailPage() {
  return <NewsDetail />;
}

export default NewsDetailPage;

async function loadAnimeById(id) {
  return sendRequest(`https://api.jikan.moe/v4/anime/${id}`);
}

async function loadNews(id) {
  return sendRequest(`https://api.jikan.moe/v4/anime/${id}/news`);
}

export async function loader({ request, params }) {
  const id = params.id;
  return defer({
    data: loadAnimeById(id),
    news: loadNews(id),
  });
}
