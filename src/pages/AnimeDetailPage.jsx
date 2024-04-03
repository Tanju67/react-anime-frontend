import React from "react";
import AnimeDetail from "../components/animeDetail/AnimeDetail";
import { defer, json } from "react-router-dom";

function AnimeDetailPage() {
  return <AnimeDetail />;
}

export default AnimeDetailPage;

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

async function loadAnimeStaff(id) {
  const response = await fetch(
    `https://api.jikan.moe/v4/anime/${id}/characters`
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
    return resData;
  }
}

async function loadAnimeReviews(id, page) {
  const response = await fetch(
    `https://api.jikan.moe/v4/anime/${id}/reviews?page=${page}`
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
    return resData;
  }
}

async function loadAnimeRecommend(id) {
  await new Promise((resolve) => setTimeout(resolve, 1500));
  const response = await fetch(
    `https://api.jikan.moe/v4/anime/${id}/recommendations`
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
    return resData;
  }
}

export async function loader({ request, params }) {
  const id = params.id;
  const page = 1;
  return defer({
    data: loadAnimeById(id),
    characters: loadAnimeStaff(id),
    reviews: loadAnimeReviews(id, page),
    recommend: loadAnimeRecommend(id),
  });
}
