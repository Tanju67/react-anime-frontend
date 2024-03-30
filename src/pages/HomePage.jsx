import React from "react";
import Home from "../components/home/Home";
import { defer, json } from "react-router-dom";

function HomePage() {
  return <Home />;
}

export default HomePage;

async function loadTopAnime() {
  const response = await fetch(
    `https://api.jikan.moe/v4/top/anime?page=1&limit=10&type=tv`
  );

  console.log(response);

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

async function loadUpcomingSeason() {
  const response = await fetch(
    `https://api.jikan.moe/v4/seasons/upcoming?page=1&limit=10`
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

async function loadTopManga() {
  const response = await fetch(
    `https://api.jikan.moe/v4/top/manga?page=1&limit=10`
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

async function loadTopAnimeMovie() {
  await new Promise((resolve) => setTimeout(resolve, 1500));
  const response = await fetch(
    `https://api.jikan.moe/v4/top/anime?page=1&limit=10&type=movie`
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

export async function loader() {
  return defer({
    data: loadTopAnime(),
    upcoming: loadUpcomingSeason(),
    topManga: loadTopManga(),
    topMovie: loadTopAnimeMovie(),
  });
}
