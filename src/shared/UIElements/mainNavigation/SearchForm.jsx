import React, { useEffect, useState } from "react";
import styles from "./SearchForm.module.css";
import { FaSearch } from "react-icons/fa";
import Button from "../Button";
import Dropdown from "./Dropdown";

function SearchForm() {
  const [query, setQuery] = useState("");
  const [searchedAnimes, setSearchedAnimes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const submitHandler = (e) => {
    e.preventDefault();
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
        />
      )}
    </div>
  );
}

export default SearchForm;
