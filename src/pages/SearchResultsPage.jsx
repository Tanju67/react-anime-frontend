import React from "react";
import SearchResults from "../components/searchResults/SearchResults";
import { sendRequest } from "../shared/utils/sendRequest";
import { defer } from "react-router-dom";

function SearchResultsPage() {
  return <SearchResults />;
}

export default SearchResultsPage;

async function loadResults(query, page, type, minScore, maxScore, status) {
  return sendRequest(
    `https://api.jikan.moe/v4/anime?q=${query}&page=${page}&type=${type}&min_score=${minScore}&max_score=${maxScore}&status=${status}`
  );
}

export async function loader({ request, params }) {
  const url = new URL(request.url);
  const query = url.searchParams.get("query");
  const page = url.searchParams.get("page") || 1;
  const type =
    url.searchParams.get("type") === "" ? "" : url.searchParams.get("type");
  const minScore =
    url.searchParams.get("min_score") === ""
      ? ""
      : url.searchParams.get("min_score");
  const maxScore =
    url.searchParams.get("max_score") === ""
      ? ""
      : url.searchParams.get("max_score");
  const status =
    url.searchParams.get("status") === "" ? "" : url.searchParams.get("status");

  return defer({
    results: loadResults(query, page, type, minScore, maxScore, status),
  });
}
