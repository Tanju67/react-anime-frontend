import React from "react";
import { sendRequest } from "../shared/utils/sendRequest";
import { defer } from "react-router-dom";
import AllNews from "../components/allnews/AllNews";

function AllNewsPage() {
  return <AllNews />;
}

export default AllNewsPage;

async function loadAnimeById(id) {
  return sendRequest(`https://api.jikan.moe/v4/anime/${id}`);
}

async function loadAllEpisode(id, page) {
  return sendRequest(`https://api.jikan.moe/v4/anime/${id}/news?page=${page}`);
}

export async function loader({ request, params }) {
  const id = params.id;
  const url = new URL(request.url);
  const page = url.searchParams.get("page");
  return defer({
    data: loadAnimeById(id),
    news: loadAllEpisode(id, page),
  });
}
