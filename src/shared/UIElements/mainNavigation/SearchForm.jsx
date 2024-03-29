import React from "react";
import styles from "./SearchForm.module.css";
import { FaSearch } from "react-icons/fa";

function SearchForm() {
  return (
    <form className={styles.search}>
      <input type="text" name="search" placeholder="Search..." />
      <button>
        <FaSearch />
        <span>Search</span>
      </button>
    </form>
  );
}

export default SearchForm;
