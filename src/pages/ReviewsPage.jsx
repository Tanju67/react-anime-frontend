/* eslint-disable react-refresh/only-export-components */
import { defer } from "react-router-dom";
import Reviews from "../components/reviews/Reviews";
import { sendRequest } from "../shared/utils/sendRequest";

function ReviewsPage() {
  return <Reviews />;
}

export default ReviewsPage;

async function loadAnimeById(id) {
  return sendRequest(`https://api.jikan.moe/v4/anime/${id}`);
}

async function loadAnimeReviews(id, page) {
  return sendRequest(
    `https://api.jikan.moe/v4/anime/${id}/reviews?page=${page}&spoiler=true`
  );
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
