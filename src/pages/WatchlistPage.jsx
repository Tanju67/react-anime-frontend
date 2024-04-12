/* eslint-disable react-refresh/only-export-components */
import { defer } from "react-router-dom";
import { sendRequest } from "../shared/utils/sendRequest";
import Watchlist from "../components/watchlist/Watchlist";

function WatchlistPage() {
  return <Watchlist />;
}

export default WatchlistPage;

async function loadWatchlist(page) {
  const token = localStorage.getItem("token");
  if (!token) return [];
  return sendRequest(
    `http://localhost:5000/api/v1/anime?page=${page}`,
    true,
    true,
    {
      Authorization: `Bearer ${token}`,
    }
  );
}

export async function loader({ request }) {
  const url = new URL(request.url);
  const page = url.searchParams.get("page");
  return defer({
    watchlist: loadWatchlist(page),
  });
}
