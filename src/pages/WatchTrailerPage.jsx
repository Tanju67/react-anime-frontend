import React from "react";
import { defer, json } from "react-router-dom";
import WatchTrailer from "../components/watchTrailer/WatchTrailer";

function WatchTrailerPage() {
  return <WatchTrailer />;
}

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

export async function loader({ request, params }) {
  const id = params.id;
  return defer({
    data: loadAnimeById(id),
  });
}

export default WatchTrailerPage;
