/* eslint-disable react-refresh/only-export-components */
import ActorDetail from "../components/actorDetail/ActorDetail";
import { sendRequest } from "../shared/utils/sendRequest";
import { defer } from "react-router-dom";

function ActorDetailPage() {
  return <ActorDetail />;
}

export default ActorDetailPage;

async function loadAnimeById(id) {
  return sendRequest(`https://api.jikan.moe/v4/anime/${id}`);
}

async function loadPerson(charId) {
  return sendRequest(`https://api.jikan.moe/v4/people/${charId}`);
}

export async function loader({ params }) {
  const charId = params.charId;
  const id = params.id;
  return defer({
    data: loadAnimeById(id),
    person: loadPerson(charId),
  });
}
