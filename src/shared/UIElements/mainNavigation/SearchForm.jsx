import React from "react";
import styles from "./SearchForm.module.css";
import { FaSearch } from "react-icons/fa";
import Button from "../Button";

function SearchForm() {
  return (
    <form className={styles.search}>
      <input type="text" name="search" placeholder="Search..." />
      <Button size="sm">
        <FaSearch />
        <span>Search</span>
      </Button>
    </form>
  );
}

export default SearchForm;
