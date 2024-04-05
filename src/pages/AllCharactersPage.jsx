import React from "react";
import { defer } from "react-router-dom";
import AllCharacters from "../components/allCharacters/AllCharacters";
import { sendRequest } from "../shared/utils/sendRequest";

function AllCharactersPage() {
  return <AllCharacters />;
}

export default AllCharactersPage;

async function loadAnimeById(id) {
  return sendRequest(`https://api.jikan.moe/v4/anime/${id}`);
}

async function loadAllCharacters(id, page) {
  return sendRequest(
    `https://api.jikan.moe/v4/anime/${id}/characters?page=${page}`
  );
}

export async function loader({ request, params }) {
  const id = params.id;
  const url = new URL(request.url);
  const page = url.searchParams.get("page");
  return defer({
    data: loadAnimeById(id),
    allCharacters: loadAllCharacters(id, page),
  });
}
