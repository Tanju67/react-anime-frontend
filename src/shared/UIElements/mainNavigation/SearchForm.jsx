/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import styles from "./SearchForm.module.css";
import Button from "../Button";
import Dropdown from "./Dropdown";

function SearchForm({ setShowSearch }) {
  const [query, setQuery] = useState("");
  const [searchedAnimes, setSearchedAnimes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const submitHandler = (e) => {
    e.preventDefault();
    setShowSearch(false);
    navigate(
      `/search-result?query=${query}&page=1&type=&min_score=&max_score=&status=`
    );
  };

  const fetchData = async (controller) => {
    try {
      setIsLoading(true);
      const res = await fetch(`https://api.jikan.moe/v4/anime?q=${query}`, {
        signal: controller,
      });
      if (!res.ok) {
        throw new Error("Something went wrong");
      }
      const data = await res.json();
      setSearchedAnimes(data.data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setError(error.message);
    }
  };

  useEffect(() => {
    if (query === "") return;
    const controller = new AbortController();
    fetchData(controller.signal);
  }, [query]);
  return (
    <div className={styles.formBox}>
      <form onSubmit={submitHandler} className={styles.search}>
        <input
          onChange={(e) => setQuery(e.target.value)}
          value={query}
          type="text"
          name="search"
          placeholder="Search..."
        />
        <Button type={"submit"} size="sm">
          <FaSearch />
          <span>Search</span>
        </Button>
      </form>
      {query.length > 2 && (
        <Dropdown
          data={searchedAnimes}
          query={query}
          setQuery={setQuery}
          isLoading={isLoading}
          setShowSearch={setShowSearch}
        />
      )}
    </div>
  );
}

export default SearchForm;
