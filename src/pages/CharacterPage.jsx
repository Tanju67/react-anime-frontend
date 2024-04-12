/* eslint-disable react-refresh/only-export-components */
import { defer } from "react-router-dom";
import { sendRequest } from "../shared/utils/sendRequest";
import Character from "../components/character/Character";

function CharacterPage() {
  return <Character />;
}

export default CharacterPage;

async function loadAnimeById(id) {
  return sendRequest(`https://api.jikan.moe/v4/anime/${id}`);
}

async function loadCharacter(charId) {
  return sendRequest(`https://api.jikan.moe/v4/characters/${charId}`);
}

export async function loader({ params }) {
  const charId = params.charId;
  const id = params.id;
  return defer({
    data: loadAnimeById(id),
    character: loadCharacter(charId),
  });
}
