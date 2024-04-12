/* eslint-disable react-refresh/only-export-components */
import { defer } from "react-router-dom";
import AllEpisodes from "../components/allEpisodes/AllEpisodes";
import { sendRequest } from "../shared/utils/sendRequest";

function AllEpisodesPage() {
  return <AllEpisodes />;
}

export default AllEpisodesPage;

async function loadAnimeById(id) {
  return sendRequest(`https://api.jikan.moe/v4/anime/${id}`);
}

async function loadAllEpisode(id, page) {
  return sendRequest(
    `https://api.jikan.moe/v4/anime/${id}/episodes?page=${page}`
  );
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
