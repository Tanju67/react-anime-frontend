import React from "react";
import AllEpisodes from "../components/allEpisodes/AllEpisodes";
import { defer, json } from "react-router-dom";

function AllEpisodesPage() {
  return <AllEpisodes />;
}

export default AllEpisodesPage;

async function loadAnimeById(id) {
  const response = await fetch(`https://api.jikan.moe/v4/anime/${id}`);

  if (!response.ok) {
    if (response.status === 429) {
      throw json(
        { message: "Too many request" },
        {
          status: 429,
        }
      );
    } else {
      throw json(
        { message: "Could not fetch anime data." },
        {
          status: 500,
        }
      );
    }
  } else {
    const resData = await response.json();
    return resData;
  }
}

async function loadAllEpisode(id, page) {
  await new Promise((resolve) => setTimeout(resolve, 1500));
  const response = await fetch(
    `https://api.jikan.moe/v4/anime/${id}/episodes?page=${page}`
  );

  if (!response.ok) {
    if (response.status === 429) {
      throw json(
        { message: "Too many request" },
        {
          status: 429,
        }
      );
    } else {
      throw json(
        { message: "Could not fetch anime data." },
        {
          status: 500,
        }
      );
    }
  } else {
    const resData = await response.json();
    console.log(resData);
    return resData;
  }
}

export async function loader({ request, params }) {
  const id = params.id;
  const url = new URL(request.url);
  const page = url.searchParams.get("page");
  return defer({
    data: loadAnimeById(id),
    allEpisodes: loadAllEpisode(id, page),
  });
}
