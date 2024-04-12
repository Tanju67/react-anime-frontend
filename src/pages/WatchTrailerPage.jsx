/* eslint-disable react-refresh/only-export-components */
import { defer } from "react-router-dom";
import WatchTrailer from "../components/watchTrailer/WatchTrailer";
import { sendRequest } from "../shared/utils/sendRequest";

function WatchTrailerPage() {
  return <WatchTrailer />;
}

async function loadAnimeById(id) {
  return sendRequest(`https://api.jikan.moe/v4/anime/${id}`);
}

export async function loader({ params }) {
  const id = params.id;
  return defer({
    data: loadAnimeById(id),
  });
}

export default WatchTrailerPage;
