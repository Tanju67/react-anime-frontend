import React from "react";
import Reviews from "../components/reviews/Reviews";
import { defer, json } from "react-router-dom";

function ReviewsPage() {
  return <Reviews />;
}

export default ReviewsPage;

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

async function loadAnimeReviews(id, page) {
  const response = await fetch(
    `https://api.jikan.moe/v4/anime/${id}/reviews?page=${page}&spoiler=true`
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
    reviews: loadAnimeReviews(id, page),
  });
}
